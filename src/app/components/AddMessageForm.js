import React from 'react';

class AddMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: '',
        importance: '',
        body: ''
      },
      importanceList: ['Low', 'Medium', 'High']
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleImportanceChange = this.handleImportanceChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTitleChange(event) {
    let form = this.state.form;
    form.title = event.target.value;
    this.setState({ form });
  }

  handleImportanceChange(event) {
    let form = this.state.form;
    form.importance = event.target.value;
    this.setState({ form });
  }

  handleBodyChange(event) {
    let form = this.state.form;
    form.body = event.target.value;
    this.setState({ form });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addMessage(this.state.form);
  }

  render() {
    const { form } = this.state;

    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Title" value={form.title} onChange={this.handleTitleChange} />
          </div>
          <div className="form-group">
            <select className="form-control" value={form.importance} onChange={this.handleImportanceChange}>
              <option value="" disabled>Importance</option>
              {this.state.importanceList.map((importance) => <option key={importance} value={importance}>{importance}</option>)}
            </select>
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Message Body" value={form.body} onChange={this.handleBodyChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}

export default AddMessageForm;
