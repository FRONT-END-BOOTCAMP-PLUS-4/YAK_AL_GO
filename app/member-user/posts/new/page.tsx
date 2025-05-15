'use client';

import { Box, Button, Container, Heading, Input, Textarea, Stack } from '@chakra-ui/react';
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
    <Container maxW="container.lg" py={8}>
      <Stack gap={8}>
        <Box>
          <Heading size="lg">새 게시글 작성</Heading>
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack gap={6}>
            <Box>
              <Box as="label" display="block" mb={2} fontWeight="medium">
                게시판 선택
              </Box>
              <select
                value={postType}
                onChange={(e) => setPostType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #E2E8F0',
                }}>
                <option value="expert">전문가 Q&A</option>
                <option value="community">자유게시판</option>
              </select>
            </Box>

            <Box>
              <Box as="label" display="block" mb={2} fontWeight="medium">
                제목
              </Box>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력하세요"
                required
              />
            </Box>

            <Box>
              <Box as="label" display="block" mb={2} fontWeight="medium">
                내용
              </Box>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력하세요"
                minH="300px"
                required
              />
            </Box>

            <Box>
              <Box as="label" display="block" mb={2} fontWeight="medium">
                태그
              </Box>
              <Stack direction="row">
                <Input
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="태그를 입력하세요"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <Button onClick={handleAddTag}>추가</Button>
              </Stack>
              <Stack direction="row" mt={2} gap={2} wrap="wrap">
                {tags.map((tag) => (
                  <Box
                    key={tag}
                    display="inline-flex"
                    alignItems="center"
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="blue.500"
                    color="white"
                    fontSize="sm">
                    {tag}
                    <Box as="button" ml={2} onClick={() => handleRemoveTag(tag)} _hover={{ opacity: 0.8 }}>
                      ×
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Stack direction="row" gap={4} justify="flex-end">
              <Button variant="outline" onClick={() => router.back()}>
                취소
              </Button>
              <Button type="submit" colorScheme="blue" disabled={!title || !content}>
                작성하기
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}
