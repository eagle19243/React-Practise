import React        from 'react';
import ContactInfo  from './ContactInfo';

class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ]
        };
    }

    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.contactData.map((contact,i) => {
                            return (<ContactInfo name = {contact.name}
                                                 phone = {contact.phone}
                                                 key = {i} />);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Contacts;