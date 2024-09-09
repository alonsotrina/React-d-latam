"use client"
// import { ToastActionElement, ToastProps } from "@/components/ui/toast"
import React from 'react';  // Asegúrate de importar React

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 5000 // Ajusta este valor según sea necesario

// Define the shape of a toast object
const genId = (() => {
  let count = 0
  return () => {
    count = (count + 1) % Number.MAX_SAFE_INTEGER
    return count.toString()
  }
})()

// Action types
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
}

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case actionTypes.DISMISS_TOAST:
      const { toastId } = action
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      }

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return { ...state, toasts: [] }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }

    default:
      return state
  }
}

const toastTimeouts = new Map()
const listeners = []

let memoryState = { toasts: [] }

// Dispatch function to handle state changes
function dispatch(action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

// Handle toast removal after a delay
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({ type: actionTypes.REMOVE_TOAST, toastId })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

// Toast API
function toast(props) {
  const id = genId()

  const update = (newProps) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...newProps, id },
    })

  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return { id, dismiss, update }
}

// Custom hook to use the toast API
const useToast = () => {
  const [state, setState] = React.useState(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  }
}

// Exporta `useToast` como exportación por defecto
export default useToast
export { toast }  // Si también exportas `toast`, hazlo de esta manera