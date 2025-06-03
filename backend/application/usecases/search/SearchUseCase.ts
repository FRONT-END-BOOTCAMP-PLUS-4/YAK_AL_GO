import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';

export interface SearchFilters {
  type?: 'post' | 'question' | 'answer' | 'comment';
  userId?: string;
  tags?: string[];
  isAccepted?: boolean;
}

export interface SearchResult {
  hits: any[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  query: string;
}

export class SearchUseCase {
  constructor(private algoliaService: AlgoliaService) {}

  async search(query: string, filters?: SearchFilters, page = 0, hitsPerPage = 20): Promise<SearchResult> {
    let filterString = '';

    if (filters) {
      const filterParts: string[] = [];

      if (filters.type) {
        filterParts.push(`type:${filters.type}`);
      }

      if (filters.userId) {
        filterParts.push(`userId:${filters.userId}`);
      }

      if (filters.tags && filters.tags.length > 0) {
        const tagFilters = filters.tags.map((tag) => `tags:${tag}`).join(' OR ');
        filterParts.push(`(${tagFilters})`);
      }

      if (filters.isAccepted !== undefined) {
        filterParts.push(`isAccepted:${filters.isAccepted}`);
      }

      filterString = filterParts.join(' AND ');
    }

    const result = await this.algoliaService.search(query, filterString || undefined, page, hitsPerPage);

    return {
      hits: result.hits,
      nbHits: result.nbHits,
      page: result.page,
      nbPages: result.nbPages,
      hitsPerPage: result.hitsPerPage,
      processingTimeMS: result.processingTimeMS,
      query: result.query,
    };
  }

  async searchPosts(query: string, page = 0, hitsPerPage = 20): Promise<SearchResult> {
    return this.search(query, { type: 'post' }, page, hitsPerPage);
  }

  async searchQuestions(query: string, page = 0, hitsPerPage = 20): Promise<SearchResult> {
    return this.search(query, { type: 'question' }, page, hitsPerPage);
  }

  async searchAnswers(query: string, page = 0, hitsPerPage = 20): Promise<SearchResult> {
    return this.search(query, { type: 'answer' }, page, hitsPerPage);
  }

  async searchByUser(query: string, userId: string, page = 0, hitsPerPage = 20): Promise<SearchResult> {
    return this.search(query, { userId }, page, hitsPerPage);
  }

  async searchByTags(query: string, tags: string[], page = 0, hitsPerPage = 20): Promise<SearchResult> {
    return this.search(query, { tags }, page, hitsPerPage);
  }
}
