class CampsiteInfo {
    constructor(props) {
        super(props);
 
    }

    render() {
        if (this.props.campsite) {
            return <div className="row" />
        }
        return <div />
        /*
        const campsite = this.state.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );*/    
    }
}

export default CampsiteInfo;