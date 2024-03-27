import PropTypes from 'prop-types'

ServicesCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.string,
}

export default function ServicesCard({ title, content, icon }) {
    let boldedContent = content;
    if (title === 'eANCare') {
      // Bolden the first and second words for the first card
      const words = content.split(' ');
    const firstPhrase = words.slice(0, 3).join(' ');
    if (firstPhrase === 'Mothers & mothers-to-be') {
      boldedContent = (
        <span>
          <span className="font-bold">{firstPhrase}</span> {words.slice(3).join(' ')}
        </span>
      );
    }
    } else if (title === 'Growing Up') {
      // Bolden only the first word for the second card
      const words = content.split(' ');
      if (words.length >= 1) {
        boldedContent = (
          <span>
            <span className="font-bold">{words[0] + " "}</span>
            {words.slice(1).join(' ')}
          </span>
        );
      }
    }
  
    return (
      <div className='px-8 py-8 rounded-md shadow border border-1 space-y-4'>
        <div className='grid grid-cols-[auto_1fr] items-center justify-start gap-2'>
          <img className='w-10' src={`/assets/logo-${icon}.svg`} alt={title} />
          <h3 className='font-semibold text-lg'>{title}</h3>
        </div>
        <p className='text-[10px]'>{boldedContent}</p>
      </div>
    );
  }
  