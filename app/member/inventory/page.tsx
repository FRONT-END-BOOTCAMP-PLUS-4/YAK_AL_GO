"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter, Pencil, Trash, Save, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Mock data for inventory
const initialInventory = [
  {
    id: 1,
    name: "타이레놀",
    company: "한국얀센",
    type: "진통제",
    stock: 45,
    status: "normal",
  },
  {
    id: 2,
    name: "판콜에이",
    company: "동아제약",
    type: "감기약",
    stock: 12,
    status: "normal",
  },
  {
    id: 3,
    name: "게보린",
    company: "삼진제약",
    type: "진통제",
    stock: 30,
    status: "normal",
  },
  {
    id: 4,
    name: "베아제",
    company: "대웅제약",
    type: "소화제",
    stock: 50,
    status: "normal",
  },
  {
    id: 5,
    name: "훼스탈골드",
    company: "한독",
    type: "소화제",
    stock: 5,
    status: "low",
  },
  {
    id: 6,
    name: "판피린",
    company: "동아제약",
    type: "진통제",
    stock: 0,
    status: "out",
  },
];

export default function InventoryPage() {
  const [inventory, setInventory] = useState(initialInventory);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInventory, setFilteredInventory] = useState(inventory);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [editingItem, setEditingItem] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    company: "",
    type: "",
    stock: 0,
  });
  const [newMedicine, setNewMedicine] = useState({
    name: "",
    company: "",
    type: "",
    stock: 0,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = inventory.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.company.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredInventory(filtered);
    } else {
      setFilteredInventory(inventory);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setNewMedicine({
      ...newMedicine,
      [id.replace("medicine-", "")]: value,
    });
  };

  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setEditFormData({
      ...editFormData,
      [id.replace("edit-", "")]: value,
    });
  };

  const handleAddMedicine = () => {
    const newId = Math.max(...inventory.map((item) => item.id)) + 1;
    const newItem = {
      id: newId,
      ...newMedicine,
      status: determineStatus(newMedicine.stock),
    };

    const updatedInventory = [...inventory, newItem];
    setInventory(updatedInventory);
    setFilteredInventory(updatedInventory);
    setShowAddDialog(false);

    // Reset form
    setNewMedicine({
      name: "",
      company: "",
      type: "",
      stock: 0,
    });
  };

  const handleEditMedicine = (id: number) => {
    const itemToEdit = inventory.find((item) => item.id === id);
    if (itemToEdit) {
      setEditingItem(id);
      setEditFormData({
        name: itemToEdit.name,
        company: itemToEdit.company,
        type: itemToEdit.type,
        stock: itemToEdit.stock,
      });
    }
  };

  const handleSaveEdit = (id: number) => {
    const updatedInventory = inventory.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...editFormData,
          status: determineStatus(editFormData.stock),
        };
      }
      return item;
    });

    setInventory(updatedInventory);
    setFilteredInventory(updatedInventory);
    setEditingItem(null);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  const handleDeleteClick = (id: number) => {
    setItemToDelete(id);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete !== null) {
      const updatedInventory = inventory.filter(
        (item) => item.id !== itemToDelete
      );
      setInventory(updatedInventory);
      setFilteredInventory(updatedInventory);
      setShowDeleteDialog(false);
      setItemToDelete(null);
    }
  };

  const determineStatus = (stock: number) => {
    if (stock === 0) return "out";
    if (stock < 10) return "low";
    return "normal";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return <Badge className="bg-green-500">정상</Badge>;
      case "low":
        return (
          <Badge
            variant="outline"
            className="border-yellow-500 text-yellow-500"
          >
            부족
          </Badge>
        );
      case "out":
        return <Badge variant="destructive">재고 없음</Badge>;
      default:
        return <Badge variant="outline">알 수 없음</Badge>;
    }
  };

  const lowStockItems = inventory.filter(
    (item) => item.status === "low" || item.status === "out"
  );

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">재고 관리</h1>
          <p className="text-muted-foreground">
            약국의 재고를 관리하고 부족한 약품을 확인하세요.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex w-full items-center space-x-2">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="약국 이름, 주소, 약품명 검색"
                value={searchQuery}
                onChange={handleSearch}
                className="pr-8" // 오른쪽 여백 확보
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button className="flex gap-2">
                <Plus className="h-4 w-4" />
                약품 추가
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>약품 추가</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="medicine-name">약품명</Label>
                  <Input
                    id="medicine-name"
                    placeholder="약품명을 입력하세요"
                    value={newMedicine.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicine-company">제조사</Label>
                  <Input
                    id="medicine-company"
                    placeholder="제조사를 입력하세요"
                    value={newMedicine.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicine-type">유형</Label>
                  <select
                    id="medicine-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={newMedicine.type}
                    onChange={handleInputChange}
                  >
                    <option value="">유형 선택</option>
                    <option value="진통제">진통제</option>
                    <option value="감기약">감기약</option>
                    <option value="소화제">소화제</option>
                    <option value="항생제">항생제</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicine-stock">재고 수량</Label>
                  <Input
                    id="medicine-stock"
                    type="number"
                    placeholder="재고 수량을 입력하세요"
                    value={newMedicine.stock.toString()}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddMedicine}>
                  추가
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            필터
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">재고 목록</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">전체</TabsTrigger>
                  <TabsTrigger value="low">부족</TabsTrigger>
                  <TabsTrigger value="normal">정상</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 gap-4 border-b bg-muted/50 p-4 font-medium">
                      <div>약품명</div>
                      <div>제조사</div>
                      <div>유형</div>
                      <div>재고</div>
                      <div>상태</div>
                      <div>관리</div>
                    </div>
                    <div className="divide-y">
                      {filteredInventory.length > 0 ? (
                        filteredInventory.map((item) => (
                          <div
                            key={item.id}
                            className="grid grid-cols-6 gap-4 p-4 items-center"
                          >
                            {editingItem === item.id ? (
                              // Edit mode
                              <>
                                <div>
                                  <Input
                                    id="edit-name"
                                    value={editFormData.name}
                                    onChange={handleEditInputChange}
                                    className="h-8 text-sm"
                                  />
                                </div>
                                <div>
                                  <Input
                                    id="edit-company"
                                    value={editFormData.company}
                                    onChange={handleEditInputChange}
                                    className="h-8 text-sm"
                                  />
                                </div>
                                <div>
                                  <select
                                    id="edit-type"
                                    value={editFormData.type}
                                    onChange={handleEditInputChange}
                                    className="h-8 text-sm w-full rounded-md border border-input"
                                  >
                                    <option value="진통제">진통제</option>
                                    <option value="감기약">감기약</option>
                                    <option value="소화제">소화제</option>
                                    <option value="항생제">항생제</option>
                                    <option value="기타">기타</option>
                                  </select>
                                </div>
                                <div>
                                  <Input
                                    id="edit-stock"
                                    type="number"
                                    value={editFormData.stock.toString()}
                                    onChange={handleEditInputChange}
                                    className="h-8 text-sm"
                                  />
                                </div>
                                <div>{getStatusBadge(item.status)}</div>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleSaveEdit(item.id)}
                                  >
                                    <Save className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleCancelEdit}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                              </>
                            ) : (
                              // View mode
                              <>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm">{item.company}</div>
                                <div className="text-sm">{item.type}</div>
                                <div className="text-sm">{item.stock}</div>
                                <div>{getStatusBadge(item.status)}</div>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleEditMedicine(item.id)}
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleDeleteClick(item.id)}
                                  >
                                    <Trash className="h-4 w-4" />
                                  </Button>
                                </div>
                              </>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-muted-foreground">
                          검색 결과가 없습니다.
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="low" className="mt-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 gap-4 border-b bg-muted/50 p-4 font-medium">
                      <div>약품명</div>
                      <div>제조사</div>
                      <div>유형</div>
                      <div>재고</div>
                      <div>상태</div>
                      <div>관리</div>
                    </div>
                    <div className="divide-y">
                      {filteredInventory
                        .filter(
                          (item) =>
                            item.status === "low" || item.status === "out"
                        )
                        .map((item) => (
                          <div
                            key={item.id}
                            className="grid grid-cols-6 gap-4 p-4 items-center"
                          >
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm">{item.company}</div>
                            <div className="text-sm">{item.type}</div>
                            <div className="text-sm">{item.stock}</div>
                            <div>{getStatusBadge(item.status)}</div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditMedicine(item.id)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteClick(item.id)}
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="expiring" className="mt-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 gap-4 border-b bg-muted/50 p-4 font-medium">
                      <div>약품명</div>
                      <div>제조사</div>
                      <div>유형</div>
                      <div>재고</div>
                      <div>상태</div>
                      <div>관리</div>
                    </div>
                    <div className="divide-y">
                      {filteredInventory
                        .filter((item) => item.status === "expiring")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="grid grid-cols-6 gap-4 p-4 items-center"
                          >
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm">{item.company}</div>
                            <div className="text-sm">{item.type}</div>
                            <div className="text-sm">{item.stock}</div>
                            <div>{getStatusBadge(item.status)}</div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditMedicine(item.id)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteClick(item.id)}
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="normal" className="mt-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 gap-4 border-b bg-muted/50 p-4 font-medium">
                      <div>약품명</div>
                      <div>제조사</div>
                      <div>유형</div>
                      <div>재고</div>
                      <div>상태</div>
                      <div>관리</div>
                    </div>
                    <div className="divide-y">
                      {filteredInventory
                        .filter((item) => item.status === "normal")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="grid grid-cols-6 gap-4 p-4 items-center"
                          >
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm">{item.company}</div>
                            <div className="text-sm">{item.type}</div>
                            <div className="text-sm">{item.stock}</div>
                            <div>{getStatusBadge(item.status)}</div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditMedicine(item.id)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteClick(item.id)}
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">재고 현황</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>총 약품 수</span>
                      <span className="font-bold">{inventory.length}개</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>재고 부족 약품</span>
                      <span className="font-bold text-yellow-500">
                        {lowStockItems.length}개
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {lowStockItems.length > 0 ? (
                      lowStockItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-2 border rounded-md"
                        >
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              현재: {item.stock}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditMedicine(item.id)}
                          >
                            수정
                          </Button>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground">
                        재고 부족 약품이 없습니다.
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>재고 삭제</AlertDialogTitle>
            <AlertDialogDescription>
              정말로 이 약품을 재고 목록에서 삭제하시겠습니까? 이 작업은 되돌릴
              수 없습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
