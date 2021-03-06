import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBar from '../src/components/nav-bar'

const routes = [
  { name: 'Home', to: '/' },
  { name: 'Disputes', to: '/disputes' },
  { name: 'Testing Panel', to: '/testing-panel' }
]

const render = routes => () => (
  <div style={{ width: '700px' }}>
    <NavBar
      accounts={{ loading: false, data: ['Placeholder'], failedLoading: false }}
      balance={{ loading: false, data: 10, failedLoading: false }}
      routes={routes}
    />
  </div>
)

storiesOf('Nav Bar', module)
  .add('with routes', render(routes))
  .add(
    'with a lot of routes, (scrollable)',
    render([
      ...routes,
      { name: 'Extra', to: '/1' },
      { name: 'Extra', to: '/2' },
      { name: 'Extra', to: '/3' },
      { name: 'Extra', to: '/4' },
      { name: 'Extra', to: '/5' },
      { name: 'Extra', to: '/6' }
    ])
  )
