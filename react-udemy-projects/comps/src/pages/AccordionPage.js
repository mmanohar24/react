import Accordion from '../components/Accordion';

function AccordionPage()
{
    const items = [
        {
            id: '1',
            label: 'Can I use React on a project?',
            content: 'You can use React on a project. You can use React on a project. You can use React on a project.'
        },
        {
            id: '2',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use JavaScript on a project. You can use JavaScript on a project. You can use JavaScript on a project.'
        },
        {
            id: '3',
            label: 'Can I use Python on a project?',
            content: 'You can use Python on a project. You can use Python on a project. You can use Python on a project.'
        }
    ];

    return <Accordion items = {items}/>
}

export default AccordionPage;