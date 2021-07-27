import React from 'react';
import Lightbox from 'react-image-lightbox';
import { ExternalLinkWithSVGIcon } from './shared';
/**
 *
 *
 *
 * TODO: we use a homebrewed accordion here. probably not accessible.
 * we originally tried https://github.com/springload/react-accessible-accordion/ but it caused jumps
 *
 *
 */

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className={`
    border-b border-temporalblack
    container mx-auto
     bg-temporalgray5
    flex flex-col pt-16
    `}>
      <h1 className="container pl-4 mb-16 md:pl-8 text-60 leading-60 lg:text-144 lg:leading-144 uppercase text-temporalblack">
        Use Cases
      </h1>
      <ul className="accordion border-t border-b border-temporalblack">
        <UCaseItem header="Microservices Orchestration" defaultState>
          <LBimage
            thumbnail="/samples/screenshot-account-transfer.svg"
            mainSrc="/samples/screenshot-account-transfer.svg"
            alt="transactions example"
          />
          <h2 className="font-bold mb-3">
            Temporal is a perfect fit for orchestrating microservices.
          </h2>
          <p className="mb-3">
            It guarantees workflow completion of any size and complexity, has built-in support for
            exponential activity retries, and simplifies defining workflow compensation logic with
            native Saga pattern support.
          </p>
          <p className="mb-3">
            You can define retries, rollbacks, cleanup, and even human intervention steps in the
            case of failure. Workflows are defined in general-purpose programming languages that
            bring the ultimate flexibility for defining workflows of any complexity, especially when
            compared to markup-based DSLs.
          </p>
          <p className="mb-3">
            Temporal provides full visibility into end-to-end workflows that can span multiple
            services. It makes complex microservices orchestration manageable by providing a high
            level of insight into each workflow's state. Contrast this with ad-hoc orchestration
            based on queues where gaining visibility of your workflows is virtually impossible.
          </p>
          <a
            className="hover:underline text-blue-800 hover:text-blue-500"
            href="/usecases#orchestration">
            Learn More, with examples from Uber and Banzai Cloud
          </a>
        </UCaseItem>
        <UCaseItem header="Financial Transactions">
          <h2 className="font-bold mb-3">
            For software that interacts with money (especially someone else's), reliability and
            consistency are top priorities.
          </h2>
          <p className="mb-3">
            Traditional solutions for financial transactions almost always introduce lurking
            reliability issues that can cause loss of revenue. Temporal eliminates these issues by
            providing an inherently reliable foundation for critical financial operations based on:
          </p>
          <LBimage
            thumbnail="/samples/screenshot-expenseworkflow.svg"
            mainSrc="/samples/screenshot-expenseworkflow.svg"
            alt="transactions example"
          />
          <ul className="mb-3 list-disc ml-6 lg:w-700">
            <li className="mb-2">
              Native support for the SAGA pattern which supports custom compensation and rollback
              logic
            </li>
            <li className="mb-2">Support for long-running operations</li>
            <li className="mb-2">Completion guarantee for workflows of any size and complexity</li>
            <li className="mb-2">Built-in support for exponential activity retries</li>
          </ul>
          <p className="mb-3">
            There have even been cases where switching to Temporal's technology immediately resulted
            in financial gains for the company because their previous solution was leaking money.
          </p>
          <a
            className="hover:underline text-blue-800 hover:text-blue-500"
            href="/usecases#transactions">
            Learn More
          </a>
          {' | '}
          <ExternalLinkWithSVGIcon url="https://github.com/temporalio/samples-go/tree/master/expense">
            See Expenses code sample
          </ExternalLinkWithSVGIcon>
        </UCaseItem>
        <UCaseItem header="Resource Provisioning">
          <h2 className="font-bold mb-4">
            Provisioning resources depends on a series of potentially long-running operations with
            many possibilities for intermittent failures.
          </h2>
          <p className="mb-3">
            While existing deployment tools support simple operations, many scenarios may still
            require a custom provisioning flow.
          </p>
          <p className="mb-3">
            Some provisioning operations may take hours or even days to complete. Ad-hoc
            provisioning solutions are often unable to handle these cases resulting in application
            failures and an inconsistent operation state.
          </p>
          <p className="mb-3">
            Temporal provides excellent building blocks for resource provisioning:
          </p>
          <LBimage
            thumbnail="/samples/screenshot-provisioning.svg"
            mainSrc="/samples/screenshot-provisioning.svg"
            alt="transactions example"
          />
          <ul className="mb-3 list-disc ml-6 lg:w-700">
            <li className="mb-2">Support for long-running operations</li>
            <li className="mb-2">Polling</li>
            <li className="mb-2">Responding to events</li>
            <li className="mb-2">Automatic retries</li>
            <li className="mb-2">Routing to specific hosts</li>
          </ul>
          <p className="mb-3">
            If a long-running provisioning workflow fails during its execution, Temporal would
            handle the error and resume workflow execution from the point where the failure
            occurred.
          </p>
          <a
            className="hover:underline text-blue-800 hover:text-blue-500"
            href="/usecases#provisioning">
            Learn More, with examples from Kubernetes and Consul
          </a>
        </UCaseItem>
        <UCaseItem header="Monitoring">
          <LBimage
            thumbnail="/samples/screenshot-monitoring.svg"
            mainSrc="/samples/screenshot-monitoring.svg"
            alt="monitoring example"
          />
          <h2 className="font-bold mb-4">
            Temporal provides guaranteed execution with at-least-once semantics with automatic
            retries.
          </h2>
          <p className="mb-3">
            Polling configuration can be as straightforward or sophisticated as needed:
          </p>
          <ul className="mb-3 list-disc ml-6 lg:w-700">
            <li className="mb-2">
              Workflows can run on a cron schedule with a single configuration setting.
            </li>
            <li className="mb-2">
              Alternatively, you can manually control the delays between intervals
              with `sleep` commands. For example, you can switch to more frequent executions in case
              of detected downtime.
            </li>
          </ul>
          <p className="mb-3">
            The history service provides visibility into history for periodic workflow executions.
          </p>
          <p className="mb-3">
            Scalability is another crucial advantage of using Temporal for periodic execution. Many
            use cases require periodic execution for a large number of entities. At Uber, some
            applications run recurring workflows for each customer. Imagine 100s of millions
            parallel cron jobs that don't require a separate batch processing framework.
          </p>
          <p className="mb-3">
            Temporal's support for long-running Activities and unlimited retries also makes it a
            great fit for monitoring use cases.
          </p>
          <a
            className="hover:underline text-blue-800 hover:text-blue-500"
            href="/usecases#monitoring">
            Learn More, with example Cluster Lifecycle monitoring workflow
          </a>
        </UCaseItem>
      </ul>
    </section>
  );
}

function LBimage({ thumbnail, mainSrc, alt }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        className="md:float-right float items-center md:h-64 md:w-64 presetTransition hover:scale-110"
        onClick={() => setOpen(true)}>
        <img src={thumbnail} alt={alt} />
      </button>
      {open && <Lightbox mainSrc={mainSrc} onCloseRequest={() => setOpen(false)} />}
    </>
  );
}

function UCaseItem({ header, children, defaultState = true }) {
  const [state, setState] = React.useState(defaultState);
  return (
    <li className="border-t border-temporalblack">
      <div
        className={
          (state ? ' bg-temporalgray5' : '') +
          ' text-temporalblack p-4 md:p-8 border-b border-temporalblack text-2xl'
        }>
        <button
          onClick={() => setState(!state)}
          className="hover:text-blue-500 flex w-full items-center justify-between">
          <span>{header}</span>
          {state ? (
            // - icon
            <svg
              className="w-8 sm:w-12 h-8 sm:h-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            // plus icon
            <svg
              className="w-8 sm:w-12 h-8 sm:h-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          )}
        </button>
      </div>
      {state && (
        <div className={(state ? 'bg-white ' : '') + 'text-temporalblack text-xl p-4 md:p-8'}>
          {children}
        </div>
      )}
    </li>
  );
}
