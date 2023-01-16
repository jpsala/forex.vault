---
test1: "hola"
test2: "chau"
---
``` dataviewjs
const sermonList = dv
	.pages('"K4xElite"').file
	

```


![[Pasted image 20230108103002.png]]

 The image is a map of the United States, with each state represented by a different color. The map is labeled with the names of each state, along with its corresponding abbreviation.

```javascript

   constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { id, img, title, info } = this.props;
    const { showInfo } = this.state;

    return (
      <article className="room">
        <div className="img-container">
          <img src={img} alt="room" />

          <div onClick={this.handleInfo} className="price-top">
            <h6>{
```
