$('.plus-cart').click(function () {
  var id = $(this).attr('pid').toString()
  var eml = this.parentNode.children[2]
  // console.log(eml)
  // console.log(id)
  $.ajax({
    type: 'GET',
    url: '/pluscart',
    data: {
      prod_id: id,
    },
    success: function (data) {
      // console.log(data)
      // console.log('success')
      eml.innerText = data.quantity
      document.getElementById('amount').innerText = data.amount.toFixed(2)
      document.getElementById('totalamount').innerText =
        data.totalamount.toFixed(2)
    },
  })
})

$('.minus-cart').click(function () {
  var id = $(this).attr('pid').toString()
  var eml = this.parentNode.children[2]
  // console.log(this.parentNode.children)
  $.ajax({
    type: 'GET',
    url: '/minuscart',
    data: {
      prod_id: id,
    },
    success: function (data) {
      // console.log(data)
      eml.innerText = data.quantity
      document.getElementById('amount').innerText = data.amount.toFixed(2)
      document.getElementById('totalamount').innerText =
        data.totalamount.toFixed(2)
    },
  })
})

$('.remove-cart').click(function () {
  var id = $(this).attr('pid').toString()
  var elm = this
  $.ajax({
    type: 'GET',
    url: '/removecart',
    data: {
      prod_id: id,
    },
    success: function (data) {
      console.log(data)
      document.getElementById('amount').innerText = data.amount
      document.getElementById('totalamount').innerText = data.totalamount
      // console.log(elm.parentNode.parentNode.parentNode.parentNode)
      elm.parentNode.parentNode.parentNode.parentNode.remove()
    },
  })
})

