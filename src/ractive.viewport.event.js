import ElementVisibilityWatcher from './visibility.observer'

if (window.Ractive) {
  window.Ractive.createViewportEvent = typeof window.IntersectionObserver !== 'undefined'
    ? (opts) => {
      let visibilityObserver = new ElementVisibilityWatcher(opts)

      return (node, fire) => {
        visibilityObserver.watch(node, (visible, data) => {
          fire({
            node: node,
            original: {
              visible: visible,
              intersectionData: data
            }
          })
        })
        return {
          teardown: () => {
            visibilityObserver.unwatch(node)
          }
        }
      }
    }
    : (opts) => (node, fire) => ({ teardown: () => {} })
}
