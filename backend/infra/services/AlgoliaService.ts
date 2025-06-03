import { algoliasearch } from 'algoliasearch';

export interface AlgoliaDocument {
  objectID: string;
  type: 'post' | 'question' | 'answer' | 'comment';
  title?: string;
  content: string;
  contentHTML?: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  userName?: string;
  userProfileImage?: string;
  tags?: string[];
  // For posts and questions
  commentCount?: number;
  answerCount?: number;
  // For answers
  isAccepted?: boolean;
  questionId?: number;
  questionTitle?: string;
  // For comments
  postId?: number;
  postTitle?: string;
}

export class AlgoliaService {
  private client: any;
  private index: any;

  constructor() {
    if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_ADMIN_API_KEY) {
      throw new Error('Algolia credentials are not properly configured');
    }

    this.client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);

    this.index = this.client.searchSingleIndex({
      indexName: process.env.ALGOLIA_INDEX_NAME || 'yak_al_go_search',
    });
  }

  async indexDocument(document: AlgoliaDocument): Promise<void> {
    try {
      await this.index.saveObject({ body: document });
    } catch (error) {
      console.error('Error indexing document:', error);
      throw error;
    }
  }

  async updateDocument(document: AlgoliaDocument): Promise<void> {
    try {
      await this.index.partialUpdateObject({ objectID: document.objectID, attributesToUpdate: document });
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  }

  async deleteDocument(objectID: string): Promise<void> {
    try {
      await this.index.deleteObject({ objectID });
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  }

  async bulkIndex(documents: AlgoliaDocument[]): Promise<void> {
    try {
      await this.index.saveObjects({ objects: documents });
    } catch (error) {
      console.error('Error bulk indexing documents:', error);
      throw error;
    }
  }

  async search(query: string, filters?: string, page = 0, hitsPerPage = 20) {
    try {
      return await this.index.search({
        searchParams: {
          query,
          filters,
          page,
          hitsPerPage,
          attributesToHighlight: ['title', 'content'],
          attributesToSnippet: ['content:50'],
        },
      });
    } catch (error) {
      console.error('Error searching:', error);
      throw error;
    }
  }

  async configureIndex(): Promise<void> {
    try {
      await this.index.setSettings({
        indexSettings: {
          searchableAttributes: ['title', 'content', 'userName', 'tags', 'questionTitle', 'postTitle'],
          attributesForFaceting: ['type', 'userId', 'tags', 'isAccepted'],
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
