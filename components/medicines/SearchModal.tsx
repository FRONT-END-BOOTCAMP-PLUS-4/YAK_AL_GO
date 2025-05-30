import type React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSearch: (query?: string) => void;
}

/**
 * 의약품 검색 모달 컴포넌트
 */
const SearchModal = ({
  isOpen,
  onClose,
  searchQuery,
  onSearchQueryChange,
  onSearch,
}: SearchModalProps) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // 모달이 열릴 때 현재 검색어로 초기화
  useEffect(() => {
    if (isOpen) {
      setLocalQuery(searchQuery);
    }
  }, [isOpen, searchQuery]);

  const handleSearch = () => {
    onSearchQueryChange(localQuery);
    onSearch(localQuery);
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setLocalQuery('');
    onSearchQueryChange('');
    onSearch('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />약 검색
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="약 이름, 성분, 제조사를 입력하세요"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-10"
              autoFocus
            />
            {localQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLocalQuery('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-gray-100 rounded-full"
              >
                <X className="h-4 w-4 text-gray-500" />
              </Button>
            )}
          </div>

          <div className="flex gap-2 justify-end">
            {searchQuery && (
              <Button variant="outline" onClick={handleClear}>
                검색 초기화
              </Button>
            )}
            <Button onClick={handleSearch} disabled={!localQuery.trim()}>
              <Search className="h-4 w-4 mr-2" />
              검색
            </Button>
          </div>

          {/* 최근 검색어나 추천 검색어를 여기에 추가할 수 있음 */}
          <div className="text-sm text-muted-foreground">
            <p>💡 팁 : 의약품명의 일부만 입력해도 검색됩니다</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
