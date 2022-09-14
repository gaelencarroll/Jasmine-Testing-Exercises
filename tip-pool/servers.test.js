describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table on updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();

    let serverTableList = document.querySelectorAll('#serverTable tbody tr td');
    expect(serverTableList[0].innerText).toEqual('Alice');
    expect(serverTableList[1].innerText).toEqual('$0.00');
    expect(serverTableList.length).toEqual(3);
  });

  afterEach(function() {
    serverNameInput.value = '';
    allServers={};
    serverId = 0;
  });

});

