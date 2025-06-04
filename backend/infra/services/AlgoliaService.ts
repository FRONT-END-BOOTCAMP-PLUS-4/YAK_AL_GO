import { algoliasearch } from 'algoliasearch';

export interface AlgoliaDocument {
  objectID: string;
  type: 'post' | 'question';
  title?: string;
  content: string;
  contentHTML?: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  userName?: string;
  userProfileImage?: string;
  tags?: string[];
  // For posts
  commentCount?: number;
  comments?: Array<{
    id: number;
    content: string;
    createdAt: number;
    userId: string;
    userName?: string;
    userProfileImage?: string;
  }>;
  // For questions
  answerCount?: number;
  answers?: Array<{
    id: number;
    content: string;
    createdAt: number;
    userId: string;
    userName?: string;
    userProfileImage?: string;
    isAccepted?: boolean;
  }>;
}

export class AlgoliaService {
  private client: any;
  private indexName: string;

  constructor() {
    if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_ADMIN_API_KEY) {
      throw new Error('Algolia credentials are not properly configured');
    }

    this.client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);
    this.indexName = process.env.ALGOLIA_INDEX_NAME || 'yak_al_go_search';
  }

  async indexDocument(document: AlgoliaDocument): Promise<void> {
    try {
      await this.client.saveObject({ indexName: this.indexName, body: document });
    } catch (error) {
      console.error('Error indexing document:', error);
      throw error;
    }
  }

  async updateDocument(document: AlgoliaDocument): Promise<void> {
    try {
      await this.client.partialUpdateObject({
        indexName: this.indexName,
        objectID: document.objectID,
        attributesToUpdate: document,
      });
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  }

  async deleteDocument(objectID: string): Promise<void> {
    try {
      await this.client.deleteObject({ indexName: this.indexName, objectID });
    } catch (error) {
      console.error('Error deleting document from Algolia:', error);
      throw error;
    }
  }

  async bulkIndex(documents: AlgoliaDocument[]): Promise<void> {
    try {
      await this.client.saveObjects({ indexName: this.indexName, objects: documents });
    } catch (error) {
      console.error('Error bulk indexing documents:', error);
      throw error;
    }
  }

  async search(query: string, filters?: string, page = 0, hitsPerPage = 20) {
    try {
      const result = await this.client.search({
        requests: [
          {
            indexName: this.indexName,
            query,
            filters,
            page,
            hitsPerPage,
            attributesToHighlight: ['title', 'content', 'comments.content', 'answers.content'],
            attributesToSnippet: ['content:100', 'comments.content:50', 'answers.content:50'],
          },
        ],
      });

      return result.results[0];
    } catch (error) {
      console.error('Error searching:', error);
      throw error;
    }
  }

  async configureIndex(): Promise<void> {
    try {
      await this.client.setSettings({
        indexName: this.indexName,
        indexSettings: {
          searchableAttributes: [
            'title',
            'content',
            'userName',
            'tags',
            'comments.content',
            'comments.userName',
            'answers.content',
            'answers.userName',
          ],
          attributesForFaceting: ['type', 'userId', 'tags', 'answers.isAccepted'],
          ranking: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom'],
          customRanking: ['desc(createdAt)', 'desc(commentCount)', 'desc(answerCount)'],
        },
      });
    } catch (error) {
      console.error('Error configuring index:', error);
      throw error;
    }
  }
}
