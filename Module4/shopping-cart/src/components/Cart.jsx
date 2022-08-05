import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCreator } from "../redux/actions";
import { removeCreator } from "../redux/actions";

let Cart = () => {
  let state = useSelector((state) => state);
  let filteredArr = state.filter((el) => el.qty > 0);
  let total = 0;
  let dispatch = useDispatch();
  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Sr no.</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((el, index) => {
            let amount = el.price * el.qty;
            total += amount;
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>
                  <span
                    onClick={() => dispatch(addCreator(el.id))}
                    class="material-symbols-outlined"
                    style={{ fontSize: "1em", cursor: "pointer" }}
                  >
                    add
                  </span>
                    {el.qty}
                  <span
                    onClick={() => dispatch(removeCreator(el.id))}
                    class="material-symbols-outlined"
                    style={{ fontSize: "1em", cursor: "pointer" }}
                  >
                    remove
                  </span>
                </td>
                <td>{amount}</td>
              </tr>
            );
          })}

          <tr>
            <th></th>
            <td></td>
            <td></td>
            <th>Total</th>
            <th>{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
