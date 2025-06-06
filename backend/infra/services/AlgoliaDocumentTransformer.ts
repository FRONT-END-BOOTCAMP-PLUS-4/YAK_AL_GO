import { Post } from '@/backend/domain/entities/Post';
import { Question } from '@/backend/domain/entities/Question';
import { Answer } from '@/backend/domain/entities/Answer';
import { Comment } from '@/backend/domain/entities/Comment';
import { AlgoliaDocument } from './AlgoliaService';

export class AlgoliaDocumentTransformer {
  static transformPost(post: Post, comments?: Comment[]): AlgoliaDocument {
    // 댓글 내용을 모두 합쳐서 검색 가능한 content에 포함
    let fullContent = this.extractTextFromContent(post.content);
    const commentsData =
      comments?.map((comment) => ({
        id: comment.id!,
        content: comment.content,
        createdAt: comment.createdAt ? Math.floor(comment.createdAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
        userId: comment.userId,
        userName: comment.user?.name,
        userProfileImage: comment.user?.image,
      })) || [];

    // 댓글 내용도 검색 가능하도록 content에 추가
    if (commentsData.length > 0) {
      const commentsText = commentsData.map((c) => c.content).join(' ');
      fullContent += ' ' + commentsText;
    }

    return {
      objectID: `post_${post.id}`,
      type: 'post',
      title: post.title,
      content: fullContent,
      contentHTML: post.contentHTML,
      createdAt: post.createdAt ? Math.floor(post.createdAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      updatedAt: post.updatedAt ? Math.floor(post.updatedAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      userId: post.userId,
      userName: post.user?.name,
      userProfileImage: post.user?.image,
      tags: post.tags?.map((tag) => tag.name) || [],
      commentCount: commentsData.length,
      comments: commentsData,
    };
  }

  static transformQuestion(question: Question, answers?: Answer[]): AlgoliaDocument {
    // 답변 내용을 모두 합쳐서 검색 가능한 content에 포함
    let fullContent = this.extractTextFromContent(question.content);
    const answersData =
      answers?.map((answer) => ({
        id: answer.id!,
        content: this.extractTextFromContent(answer.content),
        createdAt: answer.createdAt ? Math.floor(answer.createdAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
        userId: answer.userId,
        userName: answer.user?.name,
        userProfileImage: answer.user?.image,
        isAccepted: answer.isAccepted,
      })) || [];

    // 답변 내용도 검색 가능하도록 content에 추가
    if (answersData.length > 0) {
      const answersText = answersData.map((a) => a.content).join(' ');
      fullContent += ' ' + answersText;
    }

    return {
      objectID: `question_${question.id}`,
      type: 'question',
      title: question.title,
      content: fullContent,
      contentHTML: question.contentHTML,
      createdAt: question.createdAt ? Math.floor(question.createdAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      updatedAt: question.updatedAt ? Math.floor(question.updatedAt.getTime() / 1000) : Math.floor(Date.now() / 1000),
      userId: question.userId || '',
      userName: question.user?.name,
      userProfileImage: question.user?.image,
      tags: question.tags?.map((tag) => tag.name) || [],
      answerCount: answersData.length,
      answers: answersData,
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
