import Image from 'next/image';

type Props = {
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  titleClass?: string;
  text: string;
  textClass?: string;
};

function ImageTextCard({
  imageUrl,
  imageWidth = 300,
  imageHeight = 300,
  title,
  titleClass,
  text,
  textClass,
}: Props) {
  return (
    <div>
      {imageUrl && (
        <div className='py-6'>
          <div
            className='mx-auto'
            style={{ height: `${imageHeight}px`, width: `${imageWidth}px` }}
          >
            <Image
              width={0}
              height={0}
              src={imageUrl}
              alt={title}
              sizes='100vw'
              className='h-full w-full'
            />
          </div>
        </div>
      )}
      <h3
        className={`mb-2 ${titleClass ?? ''}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className={`${textClass ?? ''}`}>{text}</p>
    </div>
  );
}

export default ImageTextCard;
