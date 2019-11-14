```js
export const form = new Form({
  onSubmit: () => console.log("submitted")
})
  .addField(new Text({ name: "title", label: "Title" }))
  .addField(
    new Text({
      name: "body",
      label: "Body",
      render: () =>
        html`
          <my-custom-renderer name=${this.name}></my-custom-renderer>
        `
    })
  );
```
