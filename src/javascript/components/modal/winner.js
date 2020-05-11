import { showModal } from "./modal";
import { createElement } from "../../helpers/domHelper";
export function showWinnerModal(fighter) {
  // call showModal function 

  const title = `${fighter.name} wins!`;
  const bodyElement = createElement({ tagName: 'p', className: 'modal-body' });
  bodyElement.innerText = `${fighter.name} defeated his enemy`;
  showModal({ title, bodyElement });
}
