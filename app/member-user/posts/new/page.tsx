<<<<<<< HEAD
export default function PostCreatePage() {
    return <div>Create New Post Page</div>;
=======
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostCreatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [postType, setPostType] = useState('expert');
  const router = useRouter();

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // TODO: Implement API call to create post
      alert('게시글이 작성되었습니다.');
      router.push('/member-user/posts');
    } catch (error) {
      alert('게시글 작성에 실패했습니다.');
    }
  };

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">새 게시글 작성</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">게시판 선택</label>
            <select
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
              className="w-full p-2 border rounded-md">
              <option value="expert">전문가 Q&A</option>
              <option value="community">자유게시판</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              required
              className="w-full p-2 border rounded-md min-h-[300px]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">태그</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="태그를 입력하세요"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
                className="flex-1 p-2 border rounded-md"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                추가
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-sm">
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(tag)} className="ml-2 hover:opacity-80">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border rounded-md hover:bg-gray-100">
              취소
            </button>
            <button
              type="submit"
              disabled={!title || !content}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
              작성하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
>>>>>>> 801303d ([refactor/#17] chakraui, emotion 등 제거)
}
