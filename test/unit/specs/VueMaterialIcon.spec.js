import VueMaterialIcon from '@/components/VueMaterialIcon'
import { shallow } from 'vue-test-utils'

const name = 'favorite'
const size = 60

describe('Component VueMaterialIcon', () => {
  it('should be rendered', () => {
    const component = shallow(VueMaterialIcon, { propsData: { name } })
    expect(component.html()).not.toBe(undefined)
  })

  it('should not be rendered without prop name', () => {
    const component = shallow(VueMaterialIcon)
    expect(component.html()).toBe(undefined)
  })

  it('should get default prop size', () => {
    const component = shallow(VueMaterialIcon, { propsData: { name } })
    expect(component.hasStyle('font-size', '24px')).toBe(true)
  })

  it('should get custom prop size', () => {
    const component = shallow(VueMaterialIcon, { propsData: { name, size } })
    expect(component.hasStyle('font-size', '60px')).toBe(true)
  })

  it('should get custom prop name', () => {
    const component = shallow(VueMaterialIcon, { propsData: { name } })
    expect(component.text()).toBe('favorite')
  })
})
