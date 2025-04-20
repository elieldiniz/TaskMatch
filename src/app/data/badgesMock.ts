export type BadgeType = "award" | "star";

export interface BadgeMock {
  id: number;
  icon: BadgeType;
  texto: string;
}

export const badgesMock: BadgeMock[] = [
  { id: 1, icon: "award", texto: "Produtivo" },
  { id: 2, icon: "star", texto: "Pontual" },
];