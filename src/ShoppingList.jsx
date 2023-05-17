import { useState } from "react";

export default function ShoppingList() {
  const [shoppingItem, setShoppingItem] = useState([]);

  const removeShoppingItem = (index) => {
    let items = [...shoppingItem];
    items.splice(index, 1);
    setShoppingItem(items);
  };
  return (
    <div>
      <form>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Item Name
          </span>
          <input
            id="shop-item"
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={(e) => {
            setShoppingItem([
              ...shoppingItem,
              document.getElementById("shop-item").value
            ]);
            document.getElementById("shop-item").value = "";
          }}
        >
          Add Item
        </button>
      </form>

      {/* list section  */}
      {shoppingItem.map((item, index) => {
        return (
          <ul class="list-group">
            <li class="list-group-item" key={index}>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{item}</div>
                </div>
                <span class="badge bg-danger rounded-pill">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => removeShoppingItem(index)}
                  >
                    remove
                  </button>
                </span>
              </li>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
