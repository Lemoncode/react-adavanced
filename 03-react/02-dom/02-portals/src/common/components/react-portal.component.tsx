import React from "react";
import ReactDOM from "react-dom";

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface Props {
  children: React.ReactNode;
  wrapperId: string;
}

export const ReactPortalComponent: React.FC<Props> = (props) => {
  const { children, wrapperId } = props;
  const [wrapperElement, setWrapperElement] =
    React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    let createdOnTheFly = false;
    let element = document.getElementById(wrapperId);

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
      createdOnTheFly = true;
    }
    setWrapperElement(element);

    return () => {
      // Si lo hemos creado de forma dinámica lo borramos cuando toque
      if (createdOnTheFly && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // Ojo en el primer render wrapperElement va a ser nulo, saltamos ese caso
  if (wrapperElement === null) return null;

  return ReactDOM.createPortal(children, wrapperElement);
};
