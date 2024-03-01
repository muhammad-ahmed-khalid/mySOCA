import { AboutIconNew, FaqsIconNew, SupportIcon } from '@Asset/logo';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import { navigate } from '@Service/navigationService';

export default function useProfileSettingContainer() {

    const menuProfileSettingList = [
        {
          id: 1,
          icon:  <AboutIconNew/>,
          text: 'About Us',
          actionType: "Chevron",
          action: () => {
            navigate(NavigationRoutes.APP_STACK.ABOUT);
          },
        },
        {
          id: 2,
          icon:  <SupportIcon/>,
          actionType: "Chevron",
          text: 'Message Support Team',
        //   optionalText: phone || 'notAvaliable',
          action: () => {},
        },
        {
          id: 3,
          icon:  <FaqsIconNew/>,
          text: 'General FAQs',
          actionType: "Chevron",
        //   optionalText: email || 'notAvaliable',
          isVerified: false,
          emailVerification: 'Verify',
          action: () => {},
        },
        // {
        //   id: 4,
        //   icon:  <PerformanceSvg/>,
        //   text: 'licensePlateServiceType',
        // //   optionalText: `${licensePlate} / ${vehicleType}` || 'notAvaliable',
        //   isVerified: false,
        //   emailVerification: 'verify',
        //   action: () => {},
        // },
        // {
        //   id: 5,
        //   icon:  <PerformanceSvg/>,
        //   text: 'DOB',
        // //   optionalText:
        // //     getFormatedDateTime(dob, DATE_FORMATS.DATE_FORMAT) || 'notAvaliable',
        //   action: () => {},
        // },
        // {
        //   id: 6,
        //   icon:  <PerformanceSvg/>,
        //   text: 'updateDriverInfo',
        //   action: () => {
        //     // navigate(NavigationRoutes.APP_STACK.UPDATE_DRIVER_INFO);
        //   },
        // },
        // {
        //   id: 7,
        //   icon:  <PerformanceSvg/>,
        //   text: 'bankingInfo',
        //   action: () => {
        //     // navigate(NavigationRoutes.APP_STACK.BANKING_INFO);
        //   },
        // },
        // {
        //   id: 8,
        //   icon:  <PerformanceSvg/>,
        //   text: 'stripeconnectheading',
        // //   optionalText: t(connectedAccountStatus?.name) || 'notAvaliable',
        // //   actionType: connectedAccountStatus?.id == 0 ? 'showBtn' : null,
        //   action: () => {
        //     // connectedAccountStatus?.id == 0
        //     //   ? navigate(NavigationRoutes.APP_STACK.STRIPE_CONNECT)
        //     //   : navigate(NavigationRoutes.APP_STACK.STRIPE_CONNECT_ID, {
        //     //       stripeAccountId: stripeAccountId,
        //     //     });
        //   },
        // },
        // {
        //   id: 9,
        //   icon:  <PerformanceSvg/>,
        //   text: 'rideRequest',
        //   optionalText: 'forIncommingRides',
        //   actionType: 'showToggle',
        // //   allowIncomingRequests: allowIncomingRequests,
        //   action: () => {},
        // },
        // {
        //   id: 10,
        //   icon:  <PerformanceSvg/>,
        //   text: 'documents',
        //   action: () => {
        //   },
        // },
        // {
        //   id: 11,
        //   icon:  <PerformanceSvg/>,
        //   text: 'serviceTypes',
        //   action: () => {
        //   },
        // },
        // {
        //   id: 'language',
        //   icon:  <PerformanceSvg/>,
        //   text: 'SelectLanguage',
        //   actionType: "Chevron",
        //   optionalText: "currentLanguage",
        //   action: () => {
        //   },
        // },
      ];

  return {
    menuProfileSettingList
  };
}
