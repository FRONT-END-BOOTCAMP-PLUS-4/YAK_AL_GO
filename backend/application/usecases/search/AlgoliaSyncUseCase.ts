import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';
import { AlgoliaDocumentTransformer } from '@/backend/infra/services/AlgoliaDocumentTransformer';
import { Post } from '@/backend/domain/entities/Post';
import { Question } from '@/backend/domain/entities/Question';
import { Answer } from '@/backend/domain/entities/Answer';
import { Comment } from '@/backend/domain/entities/Comment';

export class AlgoliaSyncUseCase {
  constructor(private algoliaService: AlgoliaService) {}

  // Post sync methods
  async syncPost(post: Post, comments?: Comment[]): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformPost(post, comments);
      await this.algoliaService.indexDocument(document);
    } catch (error) {
      console.error('Error syncing post to Algolia:', error);
      // Don't throw error to prevent main operation from failing
    }
  }

  async updatePost(post: Post, comments?: Comment[]): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformPost(post, comments);
      await this.algoliaService.updateDocument(document);
    } catch (error) {
      console.error('Error updating post in Algolia:', error);
    }
  }

  async deletePost(postId: number): Promise<void> {
    try {
      await this.algoliaService.deleteDocument(`post_${postId}`);
    } catch (error) {
      console.error('Error deleting post from Algolia:', error);
    }
  }

  // Question sync methods
  async syncQuestion(question: Question, answers?: Answer[]): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformQuestion(question, answers);
      await this.algoliaService.indexDocument(document);
    } catch (error) {
      console.error('Error syncing question to Algolia:', error);
    }
  }

  async updateQuestion(question: Question, answers?: Answer[]): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformQuestion(question, answers);
      await this.algoliaService.updateDocument(document);
    } catch (error) {
      console.error('Error updating question in Algolia:', error);
    }
  }

  async deleteQuestion(questionId: number): Promise<void> {
    try {
      await this.algoliaService.deleteDocument(`question_${questionId}`);
    } catch (error) {
      console.error('Error deleting question from Algolia:', error);
    }
  }

  // Bulk sync methods for initial data seeding
  async bulkSyncPosts(posts: { post: Post; comments: Comment[] }[]): Promise<void> {
    try {
      const documents = posts.map(({ post, comments }) => AlgoliaDocumentTransformer.transformPost(post, comments));
      await this.algoliaService.bulkIndex(documents);
    } catch (error) {
      console.error('Error bulk syncing posts to Algolia:', error);
      throw error;
    }
  }

  async bulkSyncQuestions(questions: { question: Question; answers: Answer[] }[]): Promise<void> {
    try {
      const documents = questions.map(({ question, answers }) =>
        AlgoliaDocumentTransformer.transformQuestion(question, answers)
      );
      await this.algoliaService.bulkIndex(documents);
    } catch (error) {
      console.error('Error bulk syncing questions to Algolia:', error);
      throw error;
    }
  }
}
