import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";


const API_KEY = '39656186-c095d2ee573b1c30fdf5cbeaa';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
    page: 1,
    query: '',
    isModalOpen: false,
    largeImageURL: '',
  };

  handleSearchSubmit = async query => {
    const querySegment = query ? `q=${query}&` : '';

    if (query !== this.state.query) {
      this.setState({ page: 1 });
    }

    this.setState({ query });

    this.setState({ isLoading: true });

    const response = await fetch(
      `
        https://pixabay.com/api/?${querySegment}page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const data = await response.json();
    this.setState({ images: data.hits });

    this.setState({ isLoading: false });
  };

  handleLoadMore = async () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
    const querySegment = this.state.query ? `q=${this.state.query}&` : '';

    this.setState({ isLoading: true });

    const response = await fetch(
      `
        https://pixabay.com/api/?${querySegment}page=${
        this.state.page + 1
      }&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
        `
    );

    const data = await response.json();

    console.log(data.hits);
    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
    }));

    this.setState({ isLoading: false });
  };

  handleOpenModal = largeImageURL => {
    this.setState({
      isModalOpen: true,
      largeImageURL: largeImageURL,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
      largeImageURL: '',
    });
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true })

  //   const response = await fetch(
  //     `
  //       https://pixabay.com/api/?page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   );
  //   const data = await response.json();
  //   this.setState({ images: data.hits });
  //   console.log(data, 'im data');

  //   this.setState({ isLoading: false });
  // }

  render() {
    console.log('re-render');
    console.log(this.state.page, 'current page');
    console.log(this.state.images, 'updated images');
    const { images, isLoading, isModalOpen, largeImageURL } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {images.length > 0 && (
          <>
            <ImageGallery images={images} onClick={this.handleOpenModal} />
            <Button onClick={this.handleLoadMore} />
          </>
        )}
        {isLoading && <Loader />}
        <Modal
          isOpen={isModalOpen}
          imageURL={largeImageURL}
          onClose={this.handleCloseModal}
        />
      </>
    );
  }
};
