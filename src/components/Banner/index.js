import React from 'react';
import imagem1 from '../../assets/img1.jpeg';
import imagem2 from '../../assets/img2.jpeg';
import imagem3 from '../../assets/img3.jpeg';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

const items = [
  {
    src: imagem1,
    altText: 'Imagem 1'
  },
  {
    src: imagem2,
    altText: 'Imagem 2'
  },
  {
    src: imagem3,
    altText: 'Imagem 3'
  }
];

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  next = () => {
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => console.log('Exiting')}
          onExited={() => console.log('Exited')}
          key={item.src}
        >
          {/* Definindo a largura e altura como 100% para ocupar todo o tamanho da tela */}
          <img src={item.src} alt={item.altText} style={{ width: '100%', height: '100%' }} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Banner;
