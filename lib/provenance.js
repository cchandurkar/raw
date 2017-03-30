var provenance = (function(){

    // Provenance Manager
    var provenanceManager = { };

    // Create Provenance
    provenanceManager.create = function(){

        // Create Trail
        var trail =  SIMProv.UITrail()
            .attr('viz', 'myViz')
            .addControls()
            .renderTo('#provenance-controls')
            .init( { } );

        // Return trail
        return trail;

    };

    // Export
    return provenanceManager;

}());