"use client";

import type React from "react";

import { useState, useEffect } from "react";
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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

type InventoryItem = {
  id: number;
  name: string;
  company: string;
  type: string;
  stock: number;
  status?: "normal" | "low" | "out";
};

export default function InventoryPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
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
  const [allMedicines, setAllMedicines] = useState<
    {
      item_seq: string;
      item_name: string;
      entp_name: string;
      type_name: string;
    }[]
  >([]);
  const [selectedItemSeq, setSelectedItemSeq] = useState<string>("");
  const [addStock, setAddStock] = useState(0);
  const [medicineQuery, setMedicineQuery] = useState("");
  const [filteredMedicines, setFilteredMedicines] = useState<
    {
      item_seq: string;
      item_name: string;
      entp_name: string;
      type_name: string;
    }[]
  >([]);
  const [companyFilter, setCompanyFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const companyList = Array.from(
    new Set(inventory.map((item) => item.company))
  );
  const typeList = Array.from(new Set(inventory.map((item) => item.type)));
  const HPID = "C1108718";

  useEffect(() => {
    async function loadMedicines() {
      const res = await fetch("/api/inventory/medicines");
      const data = await res.json();
      console.log("약 데이터:", data); // ✅ 추가
      setAllMedicines(data);
    }

    loadMedicines();

    async function fetchInventory() {
      try {
        const res = await fetch(`/api/inventory?hpid=${HPID}`);
        const data: InventoryItem[] = await res.json();

        const dataWithStatus = data.map((item) => ({
          ...item,
          status: determineStatus(item.stock),
        }));

        setInventory(dataWithStatus);
        setFilteredInventory(dataWithStatus);
      } catch (error) {
        console.error("Failed to fetch inventory", error);
      }
    }

    fetchInventory();
  }, []);

  useEffect(() => {
    const trimmed = medicineQuery.trim();

    if (trimmed === "" || trimmed.length < 2) {
      setFilteredMedicines([]);
    } else {
      const lower = trimmed.toLowerCase();
      const result = allMedicines.filter(
        (m) =>
          m.item_name.toLowerCase().includes(lower) ||
          m.entp_name.toLowerCase().includes(lower)
      );
      setFilteredMedicines(result);
    }
  }, [medicineQuery, allMedicines]);

  useEffect(() => {
    const filtered = inventory.filter((item) => {
      const matchCompany =
        companyFilter.length === 0 || companyFilter.includes(item.company);
      const matchType =
        typeFilter.length === 0 || typeFilter.includes(item.type);
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCompany && matchType && matchSearch;
    });

    setFilteredInventory(filtered);
  }, [inventory, searchQuery, companyFilter, typeFilter]);

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

  const handleAddMedicine = async () => {
    if (!selectedItemSeq || !addStock) return;

    try {
      const res = await fetch("/api/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemSeq: selectedItemSeq,
          hpid: HPID,
          quantity: Number(addStock),
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert("추가 실패: " + error.error);
        return;
      }

      // 성공 시 다시 로딩
      const updated = await res.json();
      console.log("추가된 재고:", updated);

      setSelectedItemSeq("");
      setAddStock(0);
      setShowAddDialog(false);

      // 재로드
      const refreshed = await fetch(`/api/inventory?hpid=${HPID}`);
      const newData: InventoryItem[] = await refreshed.json();

      setInventory(
        newData.map((item: InventoryItem) => ({
          ...item,
          status: determineStatus(item.stock),
        }))
      );
      setFilteredInventory(
        newData.map((item: InventoryItem) => ({
          ...item,
          status: determineStatus(item.stock),
        }))
      );
    } catch (err) {
      console.error("재고 추가 실패:", err);
    }
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

  const handleSaveEdit = async (id: number) => {
    try {
      const res = await fetch("/api/inventory", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, stock: Number(editFormData.stock) }),
      });

      if (!res.ok) throw new Error("Failed to update");

      const updatedInventory = inventory.map((item) =>
        item.id === id
          ? {
              ...item,
              stock: Number(editFormData.stock),
              status: determineStatus(Number(editFormData.stock)),
            }
          : item
      );

      setInventory(updatedInventory);
      setFilteredInventory(updatedInventory);
      setEditingItem(null);
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  const handleDeleteClick = (id: number) => {
    setItemToDelete(id);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (itemToDelete !== null) {
      try {
        const res = await fetch("/api/inventory", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: itemToDelete }),
        });

        if (!res.ok) throw new Error("Failed to delete");

        const updatedInventory = inventory.filter(
          (item) => item.id !== itemToDelete
        );
        setInventory(updatedInventory);
        setFilteredInventory(updatedInventory);
      } catch (error) {
        console.error("삭제 실패:", error);
      } finally {
        setShowDeleteDialog(false);
        setItemToDelete(null);
      }
    }
  };

  const determineStatus = (stock: number): "normal" | "low" | "out" => {
    if (stock === 0) return "out";
    if (stock < 10) return "low";
    return "normal";
  };

  const getStatusBadge = (status: "normal" | "low" | "out" | undefined) => {
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

  const toggleFilter = (
    value: string,
    list: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    );
  };

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
                  <Label>약품 검색</Label>
                  <Input
                    type="text"
                    placeholder="약품명을 두 글자 이상 입력하세요"
                    value={medicineQuery}
                    onChange={(e) => setMedicineQuery(e.target.value)}
                  />

                  {selectedItemSeq && (
                    <div className="text-sm text-muted-foreground mt-1">
                      <Badge variant="outline">
                        {allMedicines.find(
                          (m) => m.item_seq === selectedItemSeq
                        )?.item_name ?? "선택된 약품"}
                      </Badge>
                    </div>
                  )}

                  {medicineQuery && (
                    <div className="border rounded max-h-60 overflow-y-auto mt-2">
                      {filteredMedicines.length > 0
                        ? filteredMedicines.map((med) => (
                            <button
                              key={med.item_seq}
                              className="w-full text-left px-2 py-1 hover:bg-gray-100 text-sm"
                              onClick={() => {
                                setSelectedItemSeq(med.item_seq);
                                setMedicineQuery("");
                              }}
                            >
                              {med.item_name} ({med.entp_name})
                            </button>
                          ))
                        : medicineQuery.length >= 2 && (
                            <div className="px-2 py-1 text-sm text-muted-foreground">
                              검색 결과 없음
                            </div>
                          )}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicine-stock">재고 수량</Label>
                  <Input
                    id="medicine-stock"
                    type="number"
                    placeholder="재고 수량을 입력하세요"
                    value={addStock.toString()}
                    onChange={(e) => setAddStock(Number(e.target.value))}
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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                필터
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                {/* 제조사 필터 */}
                <div className="space-y-2">
                  <Label>제조사</Label>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="companies">
                      <AccordionTrigger>제조사 선택</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                          {companyList.map((company) => (
                            <div
                              key={company}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                checked={companyFilter.includes(company)}
                                onCheckedChange={() =>
                                  toggleFilter(
                                    company,
                                    companyFilter,
                                    setCompanyFilter
                                  )
                                }
                              />
                              <Label className="text-sm">{company}</Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* 유형 필터 */}
                <div className="space-y-2">
                  <Label>유형</Label>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="types">
                      <AccordionTrigger>유형 선택</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                          {typeList.map((type) => (
                            <div
                              key={type}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                checked={typeFilter.includes(type)}
                                onCheckedChange={() =>
                                  toggleFilter(type, typeFilter, setTypeFilter)
                                }
                              />
                              <Label className="text-sm">{type}</Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* 초기화 */}
                <div className="flex justify-end">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setCompanyFilter([]);
                      setTypeFilter([]);
                      setSearchQuery("");
                    }}
                  >
                    초기화
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
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
                    <div className="grid grid-cols-[2fr_2fr_2fr_1fr_1fr_1fr] gap-4 border-b bg-muted/50 p-4 font-medium">
                      <div className="text-center">약품명</div>
                      <div className="text-center">제조사</div>
                      <div className="text-center">유형</div>
                      <div className="text-center">재고</div>
                      <div className="text-center">상태</div>
                      <div className="text-center">관리</div>
                    </div>
                    <div className="divide-y">
                      {filteredInventory.length > 0 ? (
                        filteredInventory.map((item) => (
                          <div
                            key={item.id}
                            className="grid grid-cols-[2fr_2fr_2fr_1fr_1fr_1fr] gap-4 p-4 items-center"
                          >
                            {editingItem === item.id ? (
                              // Edit mode
                              <>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm">{item.company}</div>
                                <div className="text-sm">{item.type}</div>
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
                                <div className="text-sm text-center">
                                  {item.stock}
                                </div>
                                <div className="text-center">
                                  {getStatusBadge(item.status)}
                                </div>
                                <div className="flex justify-center gap-2">
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
                    <div className="grid grid-cols-[2fr_2fr_2fr_1fr_1fr_1fr] gap-4 border-b bg-muted/50 p-4 font-medium">
                      <div className="text-center">약품명</div>
                      <div className="text-center">제조사</div>
                      <div className="text-center">유형</div>
                      <div className="text-center">재고</div>
                      <div className="text-center">상태</div>
                      <div className="text-center">관리</div>
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
                            className="grid grid-cols-[2fr_2fr_2fr_1fr_1fr_1fr] gap-4 p-4 items-center"
                          >
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm">{item.company}</div>
                            <div className="text-sm">{item.type}</div>
                            <div className="text-sm text-center">
                              {item.stock}
                            </div>
                            <div className="text-center">
                              {getStatusBadge(item.status)}
                            </div>
                            <div className="flex justify-center gap-2">
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
                    <div className="grid grid-cols-[2fr_2fr_2fr_1fr_1fr_1fr] gap-4 border-b bg-muted/50 p-4 font-medium">
                      <div className="text-center">약품명</div>
                      <div className="text-center">제조사</div>
                      <div className="text-center">유형</div>
                      <div className="text-center">재고</div>
                      <div className="text-center">상태</div>
                      <div className="text-center">관리</div>
                    </div>
                    <div className="divide-y">
                      {filteredInventory
                        .filter((item) => item.status === "normal")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="grid grid-cols-[2fr_2fr_2fr_1fr_1fr_1fr] gap-4 p-4 items-center"
                          >
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm">{item.company}</div>
                            <div className="text-sm">{item.type}</div>
                            <div className="text-sm text-center">
                              {item.stock}
                            </div>
                            <div className="text-center">
                              {getStatusBadge(item.status)}
                            </div>
                            <div className="flex justify-center gap-2">
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
                      <></>
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
