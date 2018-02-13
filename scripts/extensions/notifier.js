var notifier = function () {
    return {
        name: 'notifier',
        install: function (dcore) {
            dcore.Sandbox.prototype.success = function (msg) {
                toastr.success(msg, "", {
                    escapeHtml: true,
                    closeButton: true,
                    debug: false,
                    newestOnTop: true,
                    progressBar: false,
                    positionClass: "toast-top-right",
                    preventDuplicates: true,
                    onclick: null,
                    showDuration: 600,
                    hideDuration: 600,
                    timeOut: 8000,
                    extendedTimeOut: 3000,
                    showEasing: "swing",
                    hideEasing: "linear",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut",
                });
            };
            return {};
        }
    };
};
