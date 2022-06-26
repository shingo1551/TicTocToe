export function emit<T>(name: string, target: EventTarget | null, detail: T) {
  const event = new CustomEvent(name, {
    bubbles: true,
    detail: detail,
  });
  target?.dispatchEvent(event);
}
