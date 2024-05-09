import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import aux1 from '../../assets/aux.png';
import aux2 from '../../assets/eng.png';
import aux3 from '../../assets/ope.png';
import aux4 from '../../assets/eng.png';

class ItemCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      items: [
        {
          id: 1,
          title: "Card title 1",
          subtitle: "Card subtitle 1",
          text: "Some quick example text to build on the card title and make up the bulk of the card‘s content.",
          image: aux1
        },
        {
          id: 2,
          title: "Card title 2",
          subtitle: "Card subtitle 2",
          text: "Some quick example text to build on the card title and make up the bulk of the card‘s content.",
          image: aux2
        },
        {
          id: 3,
          title: "Card title 3",
          subtitle: "Card subtitle 3",
          text: "Some quick example text to build on the card title and make up the bulk of the card‘s content.",
          image: aux3
        },
        {
          id: 4,
          title: "Card title 4",
          subtitle: "Card subtitle 4",
          text: "Some quick example text to build on the card title and make up the bulk of the card‘s content.",
          image: aux4
        },
        {
          id: 5,
          title: "Card title 3",
          subtitle: "Card subtitle 3",
          text: "Some quick example text to build on the card title and make up the bulk of the card‘s content.",
          image: aux3
        },
        {
          id: 6,
          title: "Card title 1",
          subtitle: "Card subtitle 1",
          text: "Some quick example text to build on the card title and make up the bulk of the card‘s content.",
          image: aux1
        },
      ]
    };
  }

  componentDidMount() {
    this.startRotation();
  }

  componentWillUnmount() {
    this.stopRotation();
  }

  startRotation = () => {
    this.intervalId = setInterval(this.nextCard, 3000); // Change card every 3 seconds
  };

  stopRotation = () => {
    clearInterval(this.intervalId);
  };

  nextCard = () => {
    const newIndex = (this.state.currentIndex + 1) % this.state.items.length;
    this.setState({ currentIndex: newIndex });
  };

  render() {
    const { currentIndex, items } = this.state;

    return (
      <div className="overflow-x-auto" style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <div className="d-flex">
          {items.map((item, index) => (
            <Card key={index} style={{ width: '18rem', marginRight: '10px', flex: '0 0 auto' }}>
              <img alt="Sample" src={item.image} />
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">{item.subtitle}</CardSubtitle>
                <CardText>{item.text}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default ItemCarousel;
