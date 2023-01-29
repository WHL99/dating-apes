const errorImgURL = 'https://user-images.githubusercontent.com/104759740/215348450-95d49c9b-8a80-4098-8c6c-bc96e521dbd1.png';

function ErrorPage() {
  return (
    <div>
      <img src={errorImgURL} alt='404 error' width='50%' style={{ display: 'block', margin: 'auto', paddingTop: '20vh' }} />
    </div>
  );
}

export default ErrorPage;
