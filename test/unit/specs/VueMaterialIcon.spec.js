import VueMaterialIcon from '@/components/VueMaterialIcon'
import { shallow } from 'vue-test-utils'

const name = 'favorite'
const size = 60
const component = shallow(VueMaterialIcon)

describe('Component VueMaterialIcon', () => {
  it('should not be rendered without prop name', () => {
    expect(component.html()).toBeUndefined
  })

  it('should be rendered with prop name', () => {
    component.setProps({ name })
    expect(component.html()).toBeDefined()
  })

  it('should get default prop size', () => {
    component.setProps({ name })
    expect(component.hasStyle('font-size', '24px')).toBe(true)
  })

  it('should get custom prop size', () => {
    component.setProps({ name, size })
    expect(component.hasStyle('font-size', '60px')).toBe(true)
  })

  it('should get custom prop name', () => {
    component.setProps({ name })
    expect(component.text()).toBe('favorite')
  })
})
