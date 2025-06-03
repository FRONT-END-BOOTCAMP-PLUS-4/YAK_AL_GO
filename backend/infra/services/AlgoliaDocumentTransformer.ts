import { Post } from '@/backend/domain/entities/Post';
import { Question } from '@/backend/domain/entities/Question';
import { Answer } from '@/backend/domain/entities/Answer';
import { Comment } from '@/backend/domain/entities/Comment';
import { AlgoliaDocument } from './AlgoliaService';

export class AlgoliaDocumentTransformer {
  static transformPost(post: Post, commentCount?: number): AlgoliaDocument {
    return {
      objectID: `post_${post.id}`,
      type: 'post',
      title: post.title,
      content: this.extractTextFromContent(post.content),
      contentHTML: post.contentHTML,
      createdAt: post.createdAt ? Math.floor(post.createdAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      updatedAt: post.updatedAt ? Math.floor(post.updatedAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      userId: post.userId,
      userName: post.user?.name,
      userProfileImage: post.user?.image,
      tags: post.tags?.map((tag) => tag.name) || [],
      commentCount: commentCount || 0,
    };
  }

  static transformQuestion(question: Question, answerCount?: number): AlgoliaDocument {
    return {
      objectID: `question_${question.id}`,
      type: 'question',
      title: question.title,
      content: this.extractTextFromContent(question.content),
      contentHTML: question.contentHTML,
      createdAt: question.createdAt ? Math.floor(question.createdAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      updatedAt: question.updatedAt ? Math.floor(question.updatedAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      userId: question.userId || '',
      userName: question.user?.name,
      userProfileImage: question.user?.image,
      tags: question.tags?.map((tag) => tag.name) || [],
      answerCount: answerCount || 0,
    };
  }

  static transformAnswer(answer: Answer, question?: Question): AlgoliaDocument {
    return {
      objectID: `answer_${answer.id}`,
      type: 'answer',
      content: this.extractTextFromContent(answer.content),
      contentHTML: answer.contentHTML,
      createdAt: answer.createdAt ? Math.floor(answer.createdAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      updatedAt: answer.updatedAt ? Math.floor(answer.updatedAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      userId: answer.userId,
      userName: answer.user?.name,
      userProfileImage: answer.user?.image,
      isAccepted: answer.isAccepted,
      questionId: answer.qnaId,
      questionTitle: question?.title,
    };
  }

  static transformComment(comment: Comment, post?: Post): AlgoliaDocument {
    return {
      objectID: `comment_${comment.id}`,
      type: 'comment',
      content: comment.content,
      createdAt: comment.createdAt ? Math.floor(comment.createdAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      updatedAt: comment.updatedAt ? Math.floor(comment.updatedAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      userId: comment.userId,
      userName: comment.user?.name,
      userProfileImage: comment.user?.image,
      postId: comment.postId,
      postTitle: post?.title,
    };
  }

  private static extractTextFromContent(content: any): string {
    if (typeof content === 'string') {
      return content;
    }

    if (typeof content === 'object' && content !== null) {
      // Handle Lexical editor content (JSON format)
      if (content.root && content.root.children) {
        return this.extractTextFromLexicalNodes(content.root.children);
      }

      // Handle other JSON formats
      return JSON.stringify(content);
    }

    return '';
  }

  private static extractTextFromLexicalNodes(nodes: any[]): string {
    let text = '';

    for (const node of nodes) {
      if (node.type === 'paragraph' && node.children) {
        for (const child of node.children) {
          if (child.type === 'text' && child.text) {
            text += child.text + ' ';
          }
        }
        text += '\n';
      } else if (node.type === 'heading' && node.children) {
        for (const child of node.children) {
          if (child.type === 'text' && child.text) {
            text += child.text + ' ';
          }
        }
        text += '\n';
      } else if (node.type === 'list' && node.children) {
        text += this.extractTextFromLexicalNodes(node.children);
      } else if (node.type === 'listitem' && node.children) {
        text += '• ';
        text += this.extractTextFromLexicalNodes(node.children);
        text += '\n';
      } else if (node.children) {
        text += this.extractTextFromLexicalNodes(node.children);
      }
    }

    return text.trim();
  }
}
