import { algoliasearch } from 'algoliasearch';

export interface AlgoliaDocument {
  objectID: string;
<<<<<<< HEAD
  type: 'post' | 'question';
=======
  type: 'post' | 'question' | 'answer' | 'comment';
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
  title?: string;
  content: string;
  contentHTML?: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  userName?: string;
  userProfileImage?: string;
  tags?: string[];
<<<<<<< HEAD
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
=======
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
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
}

export class AlgoliaService {
  private client: any;
<<<<<<< HEAD
  private indexName: string;

  constructor() {
    if (!process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || !process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY) {
      throw new Error('Algolia credentials are not properly configured');
    }

    this.client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
      process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY
    );
    this.indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'yak_al_go_search';
=======
  private index: any;

  constructor() {
    if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_ADMIN_API_KEY) {
      throw new Error('Algolia credentials are not properly configured');
    }

    this.client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);

    this.index = this.client.searchSingleIndex({
      indexName: process.env.ALGOLIA_INDEX_NAME || 'yak_al_go_search',
    });
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
  }

  async indexDocument(document: AlgoliaDocument): Promise<void> {
    try {
<<<<<<< HEAD
      await this.client.saveObject({ indexName: this.indexName, body: document });
=======
      await this.index.saveObject({ body: document });
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
    } catch (error) {
      console.error('Error indexing document:', error);
      throw error;
    }
  }

  async updateDocument(document: AlgoliaDocument): Promise<void> {
    try {
<<<<<<< HEAD
      await this.client.partialUpdateObject({
        indexName: this.indexName,
        objectID: document.objectID,
        attributesToUpdate: document,
      });
=======
      await this.index.partialUpdateObject({ objectID: document.objectID, attributesToUpdate: document });
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  }

  async deleteDocument(objectID: string): Promise<void> {
    try {
<<<<<<< HEAD
      await this.client.deleteObject({ indexName: this.indexName, objectID });
    } catch (error) {
      console.error('Error deleting document from Algolia:', error);
=======
      await this.index.deleteObject({ objectID });
    } catch (error) {
      console.error('Error deleting document:', error);
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
      throw error;
    }
  }

  async bulkIndex(documents: AlgoliaDocument[]): Promise<void> {
    try {
<<<<<<< HEAD
      await this.client.saveObjects({ indexName: this.indexName, objects: documents });
=======
      await this.index.saveObjects({ objects: documents });
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
    } catch (error) {
      console.error('Error bulk indexing documents:', error);
      throw error;
    }
  }

  async search(query: string, filters?: string, page = 0, hitsPerPage = 20) {
    try {
<<<<<<< HEAD
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
=======
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
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
    } catch (error) {
      console.error('Error searching:', error);
      throw error;
    }
  }

  async configureIndex(): Promise<void> {
    try {
<<<<<<< HEAD
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
=======
      await this.index.setSettings({
        indexSettings: {
          searchableAttributes: ['title', 'content', 'userName', 'tags', 'questionTitle', 'postTitle'],
          attributesForFaceting: ['type', 'userId', 'tags', 'isAccepted'],
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
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
