import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';
import { AlgoliaDocumentTransformer } from '@/backend/infra/services/AlgoliaDocumentTransformer';
import { Post } from '@/backend/domain/entities/Post';
import { Question } from '@/backend/domain/entities/Question';
import { Answer } from '@/backend/domain/entities/Answer';
import { Comment } from '@/backend/domain/entities/Comment';

export class AlgoliaSyncUseCase {
  constructor(private algoliaService: AlgoliaService) {}

  // Post sync methods
<<<<<<< HEAD
  async syncPost(post: Post, comments?: Comment[]): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformPost(post, comments);
=======
  async syncPost(post: Post, commentCount?: number): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformPost(post, commentCount);
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
      await this.algoliaService.indexDocument(document);
    } catch (error) {
      console.error('Error syncing post to Algolia:', error);
      // Don't throw error to prevent main operation from failing
    }
  }

<<<<<<< HEAD
  async updatePost(post: Post, comments?: Comment[]): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformPost(post, comments);
=======
  async updatePost(post: Post, commentCount?: number): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformPost(post, commentCount);
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
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
<<<<<<< HEAD
  async syncQuestion(question: Question, answers?: Answer[]): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformQuestion(question, answers);
=======
  async syncQuestion(question: Question, answerCount?: number): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformQuestion(question, answerCount);
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
      await this.algoliaService.indexDocument(document);
    } catch (error) {
      console.error('Error syncing question to Algolia:', error);
    }
  }

<<<<<<< HEAD
  async updateQuestion(question: Question, answers?: Answer[]): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformQuestion(question, answers);
=======
  async updateQuestion(question: Question, answerCount?: number): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformQuestion(question, answerCount);
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
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

<<<<<<< HEAD
  // Bulk sync methods for initial data seeding
  async bulkSyncPosts(posts: { post: Post; comments: Comment[] }[]): Promise<void> {
    try {
      const documents = posts.map(({ post, comments }) => AlgoliaDocumentTransformer.transformPost(post, comments));
=======
  // Answer sync methods
  async syncAnswer(answer: Answer, question?: Question): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformAnswer(answer, question);
      await this.algoliaService.indexDocument(document);
    } catch (error) {
      console.error('Error syncing answer to Algolia:', error);
    }
  }

  async updateAnswer(answer: Answer, question?: Question): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformAnswer(answer, question);
      await this.algoliaService.updateDocument(document);
    } catch (error) {
      console.error('Error updating answer in Algolia:', error);
    }
  }

  async deleteAnswer(answerId: number): Promise<void> {
    try {
      await this.algoliaService.deleteDocument(`answer_${answerId}`);
    } catch (error) {
      console.error('Error deleting answer from Algolia:', error);
    }
  }

  // Comment sync methods
  async syncComment(comment: Comment, post?: Post): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformComment(comment, post);
      await this.algoliaService.indexDocument(document);
    } catch (error) {
      console.error('Error syncing comment to Algolia:', error);
    }
  }

  async updateComment(comment: Comment, post?: Post): Promise<void> {
    try {
      const document = AlgoliaDocumentTransformer.transformComment(comment, post);
      await this.algoliaService.updateDocument(document);
    } catch (error) {
      console.error('Error updating comment in Algolia:', error);
    }
  }

  async deleteComment(commentId: number): Promise<void> {
    try {
      await this.algoliaService.deleteDocument(`comment_${commentId}`);
    } catch (error) {
      console.error('Error deleting comment from Algolia:', error);
    }
  }

  // Bulk sync methods for initial data seeding
  async bulkSyncPosts(posts: { post: Post; commentCount: number }[]): Promise<void> {
    try {
      const documents = posts.map(({ post, commentCount }) =>
        AlgoliaDocumentTransformer.transformPost(post, commentCount)
      );
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
      await this.algoliaService.bulkIndex(documents);
    } catch (error) {
      console.error('Error bulk syncing posts to Algolia:', error);
      throw error;
    }
  }

<<<<<<< HEAD
  async bulkSyncQuestions(questions: { question: Question; answers: Answer[] }[]): Promise<void> {
    try {
      const documents = questions.map(({ question, answers }) =>
        AlgoliaDocumentTransformer.transformQuestion(question, answers)
=======
  async bulkSyncQuestions(questions: { question: Question; answerCount: number }[]): Promise<void> {
    try {
      const documents = questions.map(({ question, answerCount }) =>
        AlgoliaDocumentTransformer.transformQuestion(question, answerCount)
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
      );
      await this.algoliaService.bulkIndex(documents);
    } catch (error) {
      console.error('Error bulk syncing questions to Algolia:', error);
      throw error;
    }
  }
<<<<<<< HEAD
=======

  async bulkSyncAnswers(answers: { answer: Answer; question?: Question }[]): Promise<void> {
    try {
      const documents = answers.map(({ answer, question }) =>
        AlgoliaDocumentTransformer.transformAnswer(answer, question)
      );
      await this.algoliaService.bulkIndex(documents);
    } catch (error) {
      console.error('Error bulk syncing answers to Algolia:', error);
      throw error;
    }
  }

  async bulkSyncComments(comments: { comment: Comment; post?: Post }[]): Promise<void> {
    try {
      const documents = comments.map(({ comment, post }) => AlgoliaDocumentTransformer.transformComment(comment, post));
      await this.algoliaService.bulkIndex(documents);
    } catch (error) {
      console.error('Error bulk syncing comments to Algolia:', error);
      throw error;
    }
  }
>>>>>>> 2ae9005 ([feat/#102] feat: Algolia 검색 백엔드 구현)
}
