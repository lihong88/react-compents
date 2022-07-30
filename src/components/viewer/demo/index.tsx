import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Viewer } from 'react-compents';
import img2 from './images/landscape2.jpg';
import img from './images/landscape.jpg';
import img3 from './images/tibet-6.jpg';
import img4 from './images/image4.jpg';
import './index.less';
import classNames from 'classnames';
import { Button, List, Checkbox } from 'antd';
const ButtonGroup = Button.Group;

interface State {
  visible: boolean;
  activeIndex: number;
  mode: 'modal' | 'inline';
  drawerVisible: boolean;
  drag: boolean;
  attribute: boolean;
}

interface OptionData {
  key: string;
  type: 'boolean';
  value?: any;
}

const optionData: OptionData[] = [
  {
    key: 'drag',
    type: 'boolean',
  },
  {
    key: 'attribute',
    type: 'boolean',
  },
  {
    key: 'zoomable',
    type: 'boolean',
  },
  {
    key: 'rotatable',
    type: 'boolean',
  },
  {
    key: 'scalable',
    type: 'boolean',
  },
  {
    key: 'downloadable',
    type: 'boolean',
  },
  {
    key: 'loop',
    type: 'boolean',
  },
  {
    key: 'noClose',
    type: 'boolean',
    value: false,
  },
  {
    key: 'noImgDetails',
    type: 'boolean',
    value: false,
  },
  {
    key: 'noNavbar',
    type: 'boolean',
    value: false,
  },
  {
    key: 'noToolbar',
    type: 'boolean',
    value: false,
  },
  {
    key: 'noFooter',
    type: 'boolean',
    value: false,
  },
  {
    key: 'changeable',
    type: 'boolean',
  },
  {
    key: 'disableKeyboardSupport',
    type: 'boolean',
    value: false,
  },
  {
    key: 'noResetZoomAfterChange',
    type: 'boolean',
    value: false,
  },
  {
    key: 'noLimitInitializationSize',
    type: 'boolean',
    value: false,
  },
  {
    key: 'disableMouseZoom',
    type: 'boolean',
    value: false,
  },
  {
    key: 'downloadInNewWindow',
    type: 'boolean',
    value: false,
  },
  {
    key: 'showTotal',
    type: 'boolean',
  },
];

class App extends React.Component<any, Partial<State>> {
  container?: HTMLDivElement;

  constructor(props: any) {
    super(props);

    let _state: any = {
      visible: false,
      activeIndex: 0,
      mode: 'modal',
    };
    optionData.forEach((item) => {
      if (item.value === undefined) {
        _state[item.key] = true;
      } else {
        _state[item.key] = item.value;
      }
    });
    this.state = _state;
  }

  handleChangeModal = (e: any) => {
    this.setState({
      mode: 'modal',
    });
  };

  handleChangeInline = (e: any) => {
    this.setState({
      mode: 'inline',
      visible: true,
    });
  };

  handleOption = (key: any) => {
    const _state: any = { ...this.state };
    this.setState({
      [key]: !_state[key],
    });
  };

  render() {
    let images = [
      {
        src: img,
        alt: 'lake',
        downloadUrl: '',
      },
      {
        src: img2,
        alt: 'mountain',
        downloadUrl: '',
      },
      {
        src: img3,
        alt: '',
        downloadUrl: '',
      },
      {
        src: img4,
        alt: '',
        downloadUrl: '',
      },
    ];

    let inline = this.state.mode === 'inline';

    let inlineContainerClass = classNames('inline-container', {
      show: this.state.visible && inline,
    });

    let imgListClass = classNames('img-list', {
      hide: this.state.visible && inline,
    });

    let options: any = {};
    optionData.forEach((item) => {
      const _state: any = { ...this.state };
      options[item.key] = _state[item.key];
    });

    return (
      <div>
        <div className="container">
          <div className="wrap">
            <div>
              <h2>Options</h2>
              <div className="options">
                <ButtonGroup>
                  <Button type={inline ? undefined : 'primary'} onClick={this.handleChangeModal}>
                    Modal mode
                  </Button>
                  <Button type={inline ? 'primary' : undefined} onClick={this.handleChangeInline}>
                    Inline mode
                  </Button>
                </ButtonGroup>
                <List
                  className="options-list"
                  bordered
                  dataSource={optionData}
                  renderItem={(item) => {
                    let content = null;
                    switch (item.type) {
                      case 'boolean':
                        content = (
                          <Checkbox
                            checked={{ ...this.state }[item.key] as any}
                            onChange={() => {
                              this.handleOption(item.key);
                            }}
                          >
                            {item.key}
                          </Checkbox>
                        );
                        break;
                      default:
                        break;
                    }
                    return <List.Item>{content}</List.Item>;
                  }}
                />
              </div>
            </div>
            <div className="img-list-wrap">
              <div className={imgListClass}>
                {images.map((item, index) => {
                  return (
                    <div key={index.toString()} className="img-item">
                      <img
                        src={item.src}
                        onClick={() => {
                          this.setState({
                            visible: true,
                            activeIndex: index,
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className={inlineContainerClass}
                ref={(ref) => {
                  this.container = ref!;
                }}
              ></div>
            </div>
          </div>
          <Viewer
            visible={this.state.visible}
            onClose={() => {
              this.setState({ visible: false });
            }}
            images={images}
            activeIndex={this.state.activeIndex}
            container={inline ? this.container : null}
            downloadable
            customToolbar={(toolbars: any) => {
              return toolbars.concat([
                {
                  key: 'test',
                  render: <div>C</div>,
                  onClick: (activeImage: any) => {
                    console.log(activeImage);
                  },
                },
              ]);
            }}
            {...options}
          />
        </div>
      </div>
    );
  }
}

export default App;
