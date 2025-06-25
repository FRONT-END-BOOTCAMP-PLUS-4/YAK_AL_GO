import type React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import CategoryIcon from '@/components/ui/CategoryIcon';
import { Search, X } from 'lucide-react';
import { MAIN_CATEGORIES } from '@/utils/medicineFormatter';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSearch: (query?: string, category?: string) => void;
  currentCategory?: string;
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
  currentCategory = 'all',
}: SearchModalProps) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 모달이 열릴 때 현재 검색어와 카테고리로 초기화
  useEffect(() => {
    if (isOpen) {
      setLocalQuery(searchQuery);
      setSelectedCategory(currentCategory);
    }
  }, [isOpen, searchQuery, currentCategory]);

  const handleSearch = () => {
    onSearchQueryChange(localQuery);
    onSearch(localQuery, selectedCategory);
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setLocalQuery('');
    setSelectedCategory('all');
    onSearchQueryChange('');
    onSearch('', 'all');
    onClose();
  };

  const handleCategorySelect = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />약 검색
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* 검색어 입력 */}
          <div className="relative">
            <Input
              type="text"
              placeholder="약 이름, 성분, 제조사, 병명을 입력하세요"
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

          {/* 카테고리 선택 */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">카테고리 선택</h3>
            <div className="grid grid-cols-3 gap-2">
              {MAIN_CATEGORIES.slice(1).map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategorySelect(category.key)}
                  className="flex flex-col items-center gap-1 h-auto p-2 text-xs"
                >
                  <CategoryIcon
                    src={category.icon}
                    alt={category.label}
                    size={20}
                    className="w-5 h-5"
                  />
                  <span className="text-xs leading-tight">{category.label}</span>
                </Button>
              ))}
            </div>
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategorySelect('all')}
              className="w-full"
            >
              전체 카테고리
            </Button>
          </div>

          {/* 선택된 카테고리 표시 */}
          {selectedCategory !== 'all' && (
            <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-md">
              <span className="text-sm text-muted-foreground">선택된 카테고리:</span>
              <Badge variant="secondary" className="flex items-center gap-1">
                <CategoryIcon
                  src={MAIN_CATEGORIES.find(c => c.key === selectedCategory)?.icon || ''}
                  alt=""
                  size={16}
                  className="w-4 h-4"
                />
                {MAIN_CATEGORIES.find(c => c.key === selectedCategory)?.label}
              </Badge>
            </div>
          )}

          <div className="flex gap-2 justify-end">
            {searchQuery && (
              <Button variant="outline" onClick={handleClear}>
                검색 초기화
              </Button>
            )}
            <Button onClick={handleSearch} disabled={!localQuery.trim() && selectedCategory === 'all'}>
              <Search className="h-4 w-4 mr-2" />
              검색
            </Button>
          </div>

          {/* 검색 팁 */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p>💡 팁 : 의약품명의 일부만 입력해도 검색됩니다</p>
            <p>💡 팁 : 카테고리를 선택하면 해당 분야의 약만 검색됩니다</p>
            <p>💡 팁 : 병명으로도 검색할 수 있습니다</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
