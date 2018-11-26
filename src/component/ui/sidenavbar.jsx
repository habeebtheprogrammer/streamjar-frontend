import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class Sidenavbar extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>

      

          {/* <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='../../images/code.jpg' />
            </Segment>
          </Sidebar.Pusher> */}
        {/* </Sidebar.Pushable> */}
      </div>
    )
  }
}
