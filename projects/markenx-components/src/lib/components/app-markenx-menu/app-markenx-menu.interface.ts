export interface AppMarkenxMenu {
  enabledItems: Array<{ updateSelection(value: string): void }>;
  selectItem(value: string): void;
}
