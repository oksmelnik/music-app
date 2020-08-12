import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import List from './components/List';
import { MemoryRouter } from 'react-router-dom'
import selectEvent from 'react-select-event'

const albums = [{
  id: "1497942465",
  imageBig: "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/b9/70/e2/b970e208-7e7b-9072-e0c2-7aa11d416dbb/20UMGIM08159.rgb.jpg/170x170bb.png",
  imageSmall: "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/b9/70/e2/b970e208-7e7b-9072-e0c2-7aa11d416dbb/20UMGIM08159.rgb.jpg/55x55bb.png",
  title: "Born Here Live Here Die Here - Luke Bryan",
  year: "April 24, 2020"
}, {
  id: "1148642251",
  imageBig: "https://is2-ssl.mzstatic.com/image/thumb/Music71/v4/5f/ae/92/5fae9237-b23d-5f5e-b722-c92edd0eaf46/dj.wxggooob.jpg/170x170bb.png",
  imageSmall: "https://is5-ssl.mzstatic.com/image/thumb/Music71/v4/5f/ae/92/5fae9237-b23d-5f5e-b722-c92edd0eaf46/dj.wxggooob.jpg/55x55bb.png",
  title: "The Singles - Phil Collins",
  year: "October 14, 2016"
}]


test('renders list', () => {
  const { container } = render(<MemoryRouter><List albums={albums} pending={false}/></MemoryRouter>);
  const albumElements = container.querySelectorAll('a');
  expect(albumElements).toHaveLength(2);
});

test('dont renders list while pending', () => {
  const { container } = render(<MemoryRouter><List albums={albums} pending={true}/></MemoryRouter>);
  const albumElements = container.querySelectorAll('a');
  expect(albumElements).toHaveLength(0);
});

test('contains titles', () => {
  const { getByText } = render(<MemoryRouter><List albums={albums} /></MemoryRouter>);
  expect(getByText('The Singles - Phil Collins')).toBeInTheDocument()
  expect(getByText('Born Here Live Here Die Here - Luke Bryan')).toBeInTheDocument()
});

test('contains titles', () => {
  const { getByText } = render(<MemoryRouter><List albums={albums} /></MemoryRouter>);
  expect(getByText('The Singles - Phil Collins')).toBeInTheDocument()
  expect(getByText('Born Here Live Here Die Here - Luke Bryan')).toBeInTheDocument()
});

test('filters list on select', async () => {
  const { getByTestId, getByLabelText } = render(<MemoryRouter><List albums={albums} /></MemoryRouter>);

  expect(getByTestId('list')).toHaveTextContent('Born Here Live Here Die Here - Luke Bryan')

  await selectEvent.select(getByLabelText('Select by album name'),
    ["The Singles - Phil Collins"]
  )

  expect(getByTestId('list')).not.toHaveTextContent('Born Here Live Here Die Here - Luke Bryan')
});

test('dont filters list on deselect', async () => {
  const { getByTestId, getByLabelText } = render(<MemoryRouter><List albums={albums} /></MemoryRouter>);

  expect(getByTestId('list')).toHaveTextContent('Born Here Live Here Die Here - Luke Bryan')

  await selectEvent.select(getByLabelText('Select by album name'),
      ["The Singles - Phil Collins"]
  )

  expect(getByTestId('list')).not.toHaveTextContent('Born Here Live Here Die Here - Luke Bryan')

  await selectEvent.clearFirst(getByLabelText('Select by album name'))

  expect(getByTestId('list')).toHaveTextContent('Born Here Live Here Die Here - Luke Bryan')

});









