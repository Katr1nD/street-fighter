import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });
  // todo: show fighter info (image, name, health, etc.)
  const fighterMarkup = `<img src=${fighter.source}>
    <table style="margin: 0 auto; color: white; font-size: 20px; font: Arial">
      <caption>
        <p>${fighter.name}</p>
      </caption>
      <tr>
        <td>Health:</td>
      <td>${fighter.health}</td>
      </tr>
      <tr>
        <td>Attack:</td>
      <td>${fighter.attack}</td>
      </tr>
      <tr>
        <td>Defense:</td>
      <td>${fighter.defense}</td>
      </tr>
    </table>`;

  fighterElement.innerHTML = fighterMarkup;

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
