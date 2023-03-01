export const reducer = (state, action) => {
  const { showAddForm, addCategories, category, showAddItem, addItemInput, editId } =
    state

  const { type, payLoad } = action

  if (type === 'TOGGLE_ADDITEM') {
    return { ...state, showAddItem: !showAddItem }
  }

  if (type === 'ADD_CATEGORIES') {
    return { ...state, showAddForm: !showAddForm }
  }

  if (type === 'ADDING_CATEGORIES') {
    const { name, value } = payLoad
    return { ...state, addCategories: { ...addCategories, [name]: value } }
  }

  if (type === 'ITEM_INPUT') {
    return { ...state, addItemInput: payLoad }
  }

  if (type === 'ADD_CATEGORY') {
    const { name } = addCategories

    if (!name) {
      return { ...state }
    }

    const newCategories = [
      ...category,
      {
        ...addCategories,
        items: [],
        total: 0,
        id: new Date().getTime().toString(),
      },
    ]

    return {
      ...state,
      category: newCategories,
      showAddForm: false,
      addCategories: { name: '', description: '' },
    }
  }

  if (type === 'ADD_ITEM') {
    const checkAmount = addItemInput.trim()

    if (checkAmount <= 0) {
      return { ...state }
    }

    const addItem = category.map((each) => {
      const { id, items } = each

      let compact

      if (editId) {
        console.log('working')
        const editing = items.map((each) =>
          each.id === editId ? { ...each, amount: addItemInput } : { ...each }
        )
        compact = editing
      } else {
        compact = [
          ...items,
          { amount: addItemInput, id: new Date().getTime().toString() },
        ]
      }

      if (id === payLoad) {
        return { ...each, items: compact }
      } else {
        return { ...each }
      }
    })
    return {
      ...state,
      category: addItem,
      showAddItem: false,
      addItemInput: null,
      editId: '',
    }
  }

  if (type === 'GRAND_TOTAL') {
    return { ...state, grandTotal: payLoad }
  }

  if (type === 'ITEM_TOTAL') {
    const itemsHandler = category.map((each) => {
      const { id, items } = each

      const totalItems = items.reduce((acc, each) => {
        const num = parseInt(each.amount)
        return acc + num
      }, 0)

      if (payLoad === id) {
        return { ...each, total: totalItems }
      } else {
        return { ...each }
      }
    })
    return { ...state, category: itemsHandler, addItemInput: '' }
  }

  if (type === 'CLEAR_HANDLER') {
    const clearItem = category.map((each) => {
      const { id } = each

      if (id === payLoad) {
        return { ...each, items: [] }
      } else {
        return { ...each }
      }
    })
    return { ...state, category: clearItem }
  }

  if (type === 'DELETE') {
    const { identity } = payLoad
    const DeleteItem = category.map((each) => {
      const { id, items } = each
      if (id === identity) {
        const del = items.filter((each) => each.id !== payLoad.id)
        return { ...each, items: del }
      } else {
        return { ...each }
      }
    })
    return { ...state, category: DeleteItem }
  }

  if (type === 'EDIT') {
    const { id, identity } = payLoad
    const edit = category.find((each) => each.id === identity)
    const filter = edit.items.find((each) => each.id === id)
    const { amount } = filter
    console.log(amount, 'This is the amount')
    return { ...state, addItemInput: amount, showAddItem: true, editId: id }
  }

  if (type === 'REMOVE_CATEGORY') {
    const filter = category.filter((each) => {
      return each.id !== payLoad
    })
    return { ...state, category: filter }
  }
  return { ...state }
}
