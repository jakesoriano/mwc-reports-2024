import Image from 'next/image';

type Props = {
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  title?: string;
  titleClass?: string;
  text?: string;
  textClass?: string;
  alignment?: 'vertical' | 'horizontal';
};

function ImageTextCard({
  imageUrl,
  imageWidth = 300,
  imageHeight = 300,
  title,
  titleClass,
  text,
  textClass,
  alignment = 'vertical',
}: Props) {
  return (
    <div
      className={`flex ${
        alignment === 'vertical' ? 'flex-col' : 'flex-row items-center gap-x-6'
      }`}
    >
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
              alt={title || ''}
              sizes='100vw'
              className='h-full w-full'
            />
          </div>
        </div>
      )}
      <div className='flex-1'>
        <h3
          className={`mb-2 ${titleClass ?? ''}`}
          dangerouslySetInnerHTML={{ __html: title || '' }}
        />
        <div
          className={`${textClass ?? ''}`}
          dangerouslySetInnerHTML={{ __html: text || '' }}
        />
      </div>
    </div>
  );
}

export default ImageTextCard;
