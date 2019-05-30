import { Foundation } from 'foundation-sites/js/foundation.core'
import { Tabs } from 'foundation-sites/js/foundation.tabs'
import { AccordionMenu } from 'foundation-sites/js/foundation.accordionMenu'
import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas'
import { Sticky } from 'foundation-sites/js/foundation.sticky'
import { Equalizer } from 'foundation-sites/js/foundation.equalizer'

function initFoundation() {
  // Include the Foundation Modules that we'll use in the app
  Foundation.plugin(Tabs, 'Tabs')
  Foundation.plugin(AccordionMenu, 'AccordionMenu')
  Foundation.plugin(OffCanvas, 'OffCanvas')
  Foundation.plugin(Sticky, 'Sticky')
  Foundation.plugin(Equalizer, 'Equalizer')
  
  // Add jQuery to Foundation
  Foundation.addToJquery(jQuery)

  // Kick off foundation
  jQuery(document).foundation()
}

export default initFoundation