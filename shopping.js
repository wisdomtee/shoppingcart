document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const totalPrice = document.getElementById("total-price");
  
    items.forEach(item => {
      const quantitySpan = item.querySelector(".quantity");
      const priceSpan = item.querySelector(".price");
      const quantityMinusBtn = item.querySelector(".minus");
      const quantityPlusBtn = item.querySelector(".plus");
      const deleteBtn = item.querySelector(".delete-btn");
      const likeBtn = item.querySelector(".like-btn");
  
      quantityMinusBtn.addEventListener("click", function() {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
          quantity--;
          quantitySpan.textContent = quantity;
          updateTotalPrice();
        }
      });
  
      quantityPlusBtn.addEventListener("click", function() {
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
        updateTotalPrice();
      });
  
      deleteBtn.addEventListener("click", function() {
        item.remove();
        updateTotalPrice();
      });
  
      likeBtn.addEventListener("click", function() {
        likeBtn.classList.toggle("liked");
      });
    });
  
    function updateTotalPrice() {
      let total = 0;
      items.forEach(item => {
        const quantity = parseInt(item.querySelector(".quantity").textContent);
        const price = parseFloat(item.querySelector(".price").textContent);
        total += quantity * price;
      });
      totalPrice.textContent = total.toFixed(2);
    }
  });
  