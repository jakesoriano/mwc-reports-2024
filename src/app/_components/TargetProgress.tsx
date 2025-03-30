import Image from 'next/image';

type Props = {
  title: string;
  titleImages?: string[];
  target: string;
  progress: string;
  sideImage: string;
  smallText?: string;
};

function TargetProgress({
  title,
  titleImages,
  target,
  progress,
  sideImage,
  smallText,
}: Props) {
  return (
    <div className='flex gap-x-5'>
      {/* info side */}
      <div className='flex-1'>
        {/* title */}
        <div className='mb-4 flex gap-x-6 items-center'>
          {titleImages && (
            <div className='flex gap-x-4'>
              {titleImages.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`${title} image ${index + 1}`}
                  width={45}
                  height={45}
                />
              ))}
            </div>
          )}
          <p className='font-bold text-secondary flex-0 grow-1 w-fit'>
            {title}
          </p>
        </div>
        {/* info */}
        <div>
          <div className='mb-4'>
            <span className='font-bold text-secondary'>Target:</span>
            <div
              className='inline ml-1'
              dangerouslySetInnerHTML={{ __html: target }}
            />
          </div>
          <div className='mb-4'>
            <span className='font-bold text-secondary'>Progress:</span>
            <div
              className='inline ml-1'
              dangerouslySetInnerHTML={{ __html: progress }}
            />
          </div>
          {smallText && (
            <div
              className='text-xs italic'
              dangerouslySetInnerHTML={{ __html: smallText }}
            />
          )}
        </div>
      </div>
      {/* image side */}
      <div className='flex-1'>
        <Image
          src={sideImage}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full'
        />
      </div>
    </div>
  );
}

export default TargetProgress;
