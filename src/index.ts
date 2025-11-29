import { ReferenceApp } from './app/ReferenceApp';

Hooks.once('init', () => {
  console.log('t20reference | init');
});

// SceneControls regions | tiles | templates | drawnings | walls | lighting |
//               sounds | tokens | notes

//eslint-disable-next-line @typescript-eslint/no-explicit-any
Hooks.on('getSceneControlButtons' as any, (controls: any) => {
  if (!controls.notes?.tools) return;

  controls.notes.tools['open-t20-reference'] = {
    name: 'open-t20-reference',
    title: 'Abrir referencias tormenta20',
    icon: 'fa-solid fa-book',
    button: 'true',
    onChange: () => {
      const referenceApp = new ReferenceApp();
      referenceApp.render(true);
    },
  };
});
